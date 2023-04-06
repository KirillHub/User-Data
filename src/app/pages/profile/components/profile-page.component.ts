import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, tap, Subscription } from 'rxjs';

import { UserResult } from '../../../shared/models/User.model';
import { selectUserData } from '../state/profile-page.selectors';
import { loadUserData } from '../state/profile-page.actions';
import { UserDataState } from '../state/profile-page.state';
import UserProfile from '../../users/models/UserProfile';

@Component({
  templateUrl: 'profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  colCountByScreen: object;
  userData$: Observable<UserResult[]> = of([]);
  userData: UserProfile[] = [];
  userPicture!: string;

  constructor(private store: Store<UserDataState>) {
    this.colCountByScreen = {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4
    };
  }

  ngOnInit(): void {
    this.store.dispatch(loadUserData());

    this.subscription = this.store.select(selectUserData).subscribe(userData => {
      if (userData.length === 0) {
        this.store.dispatch(loadUserData());
      }

      this.userData = userData.map(user => {
        const { ...location } = user.location;
        const concatLocation = `${location.state} ${location.country} ${location.postcode}`;

        const { picture, ...userWithoutPicture } = user;
        this.userPicture = picture.large;
        return { ...userWithoutPicture, location: concatLocation };
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
