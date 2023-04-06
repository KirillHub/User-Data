import { setLoadingSpinner } from 'src/app/store/Shared/shared.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map, mergeMap, catchError, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from 'src/app/shared/services/error.service';
import { UserService } from 'src/app/shared/services/user.service';
import { loadUserData, loadUserDataSuccess } from './profile-page.actions';

@Injectable()
export class UserProfileDataEffects {
  constructor(
    private actions$: Actions,
    private userDataService: UserService,
    private store: Store<AppState>,
    private errorService: ErrorService
  ) {}

  loadUserData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUserData),
      mergeMap(() => {
        return this.userDataService.getOneUser().pipe(
          map(data => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            return loadUserDataSuccess({ userData: data });
          }),
          // eslint-disable-next-line rxjs/no-implicit-any-catch
          catchError((error: HttpErrorResponse) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this.errorService.handle(error.message);
            return throwError(() => error.message);
          })
        );
      })
    );
  });
}
