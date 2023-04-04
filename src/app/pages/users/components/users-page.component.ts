import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { Observable, of } from 'rxjs';
import { loadUserData } from '../state/users-page.actions';
import { selectUserData } from '../state/users-page.selectors';
import UserData from '../models/User.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponents implements OnInit {
  userData$: Observable<UserData[]> = of([]);

  constructor(private store: Store<AppState>, private service: UserService) {}

  ngOnInit(): void {
    this.store.dispatch(loadUserData());

    this.userData$ = this.store.select(selectUserData);
  }
}
