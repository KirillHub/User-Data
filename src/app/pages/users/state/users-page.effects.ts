import { setLoadingSpinner } from 'src/app/store/Shared/shared.actions';
import { Actions, createEffect } from '@ngrx/effects';
import { Injectable, OnDestroy } from '@angular/core';
import {
  map,
  catchError,
  throwError,
  Subscription,
  Observable,
  of,
  switchMap,
  combineLatest
} from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { HttpErrorResponse } from '@angular/common/http';
import { loadUsersDataSuccess } from './users-page.actions';
import { ErrorService } from 'src/app/shared/services/error.service';
import { UserService } from 'src/app/shared/services/user.service';
import { selectCustomUrl, selectFilteredOptions } from './users-page.selectors';

@Injectable()
export class UsersDataEffects implements OnDestroy {
  url: Observable<string> = of('');
  subscriptions: Subscription[] = [];
  constructor(
    private actions$: Actions,
    private userDataService: UserService,
    private store: Store<AppState>,
    private errorService: ErrorService
  ) {}

  loadUsersData$ = createEffect(() => {
    return combineLatest([
      this.store.select(selectCustomUrl),
      this.store.select(selectFilteredOptions)
    ]).pipe(
      switchMap(([url, restUserParams]) => {
        return this.userDataService.getUsersByFilters(url).pipe(
          map(data => {
            this.store.dispatch(setLoadingSpinner({ status: false }));

            let modifiedData = data;

            if (restUserParams.includes('street')) {
              modifiedData = modifiedData.map(item => {
                const { street, ...rest } = item.location;
                item.location = rest;
                return item;
              });
            }

            if (restUserParams.includes('city')) {
              modifiedData = modifiedData.map(item => {
                const { city, ...rest } = item.location;
                item.location = rest;
                return item;
              });
            }

            return loadUsersDataSuccess({ userData: modifiedData });
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

  ngOnDestroy(): void {
    this.subscriptions?.forEach(subs => subs.unsubscribe());
  }
}
