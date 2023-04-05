import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorService } from 'src/app/shared/services/error.service';
import{ UserResult } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  numberOfRequestedUsers = 100;
  apiUrl = 'https://randomuser.me/api/';

  constructor(private http: HttpClient, private errorService: ErrorService) {}

  getUser(): Observable<UserResult[]> {
    const url = `${this.apiUrl}?inc=name,gender,email,phone,picture,location&noinfo&nat=us`;
    return this.http.get<UserResult[]>(url);
    // .pipe
    // catchError(this.errorService.handle('aa'))
    // ();
  }

  /*
    setUserInLocalStorage(user: User) {
    localStorage.setItem('userData', JSON.stringify(user));

    this.runTimeoutInterval(user);
  }

    getUserFromLocalStorage() {
    const userDataString = localStorage.getItem('userData');
    if (userDataString) {
      const userData = JSON.parse(userDataString);
      const expirationDate = new Date(userData.expirationDate);
      const user = new User(
        userData.email,
        userData.token,
        userData.localId,
        expirationDate
      );
      this.runTimeoutInterval(user);
      return user;
    }
    return null;
  }
  */
}
