import { setLoadingSpinner } from 'src/app/store/Shared/shared.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map, mergeMap, catchError, throwError, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { HttpErrorResponse } from '@angular/common/http';
import { loadUserData, loadUserDataSuccess } from './users-page.actions';
import { ErrorService } from 'src/app/shared/services/error.service';
import { UsersDataService } from 'src/app/shared/services/users-data.service';

@Injectable()
export class UserDataEffects {
  constructor(
    private actions$: Actions,
    private userDataService: UsersDataService,
    private store: Store<AppState>,
    private errorService: ErrorService
  ) {}

  loadUserData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUserData),
      tap(() => this.store.dispatch(setLoadingSpinner({ status: true }))),
      mergeMap(() => {
        return this.userDataService.getAll().pipe(
          map(data => loadUserDataSuccess({ userData: data })),
          // eslint-disable-next-line rxjs/no-implicit-any-catch
          catchError((error: HttpErrorResponse) => {
            this.errorService.handle(error.message);
            return throwError(() => error.message);
          })
        );
      }),
      tap(() => this.store.dispatch(setLoadingSpinner({ status: false })))
    );
  });
}

/*
  loadUserData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadUserData),
      mergeMap(() => {
        return this.userDataService.getAll().pipe(
          map(data => {
            this.store.dispatch(setLoadingSpinner({ status: true }));
            return loadUserDataSuccess({ userData: data });
          }),
          // eslint-disable-next-line rxjs/no-implicit-any-catch
          catchError((error: HttpErrorResponse) => {
            this.store.dispatch(setLoadingSpinner({ status: true }));
            this.errorService.handle(error.message);
            return throwError(() => error.message);
          })
        );
      })
    );
  });
*/
