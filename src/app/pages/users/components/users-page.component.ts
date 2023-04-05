import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Observable, of, Subscription } from 'rxjs';
import { loadUserData } from '../state/users-page.actions';
import { selectUserData } from '../state/users-page.selectors';
import { UserService } from '../services/user.service';
import { setLoadingSpinner } from 'src/app/store/Shared/shared.actions';
import { getLoading } from 'src/app/store/Shared/shared.selector';
import { UserResult } from '../models/User.model';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponents implements OnInit {
  userData$: Observable<UserResult[]> = of([]);
  subscriptions?: Subscription;

  constructor(private store: Store<AppState>, private service: UserService) {}

  ngOnInit(): void {
    //  this.store.dispatch(loadUserData());

    this.store.dispatch(loadUserData());
    this.userData$ = this.store.select(selectUserData);
    // eslint-disable-next-line rxjs/no-ignored-subscription
    this.userData$.subscribe(userData1 => console.log(userData1));
  }
}

/*
    onLoginSubmit() {
	console.log('	WE CLICKE');
    this.store.dispatch(setLoadingSpinner({ status: true }));
    this.store.dispatch(loadUserData());
  }
  */
