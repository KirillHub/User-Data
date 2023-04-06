import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of, Subscription } from 'rxjs';

import { UserResult } from '../../../shared/models/User.model';
import Filter from 'src/app/shared/models/Filter.model';
import { selectUserData } from '../state/users-page.selectors';
import { loadUsersData } from '../state/users-page.actions';
import { UsersDataState } from '../state/users-page.state';
import { setLoadingSpinner } from 'src/app/store/Shared/shared.actions';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponents implements OnInit, OnDestroy {
  userData$: Observable<UserResult[]> = of([]);
  subscriptions?: Subscription;
  userCount$: Observable<string | void> = of('');
  userData: UserResult[] = [];

  constructor(private store: Store<UsersDataState>) {}

  ngOnInit(): void {
    this.subscriptions = this.store.select(selectUserData).subscribe(userData => {
      if (userData.length === 0) {
        this.store.dispatch(loadUsersData());
      }
      this.userData = userData;
    });
  }

  onFilterChanged(filters: Filter): void {
    console.log('Received filters:', filters);
    // понимаю, что слегка выхожу за рамки ТЗ и исп. state для хранения фильтров юзера для поиска
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(loadUsersData());
  }

  ngOnDestroy(): void {
    this.subscriptions?.unsubscribe();
  }
}
