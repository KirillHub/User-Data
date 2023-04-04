import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ErrorService } from 'src/app/shared/services/error.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}
  private apiUrl = 'https://randomuser.me/api/';

  getUser(): Observable<any> {
    const url = `${this.apiUrl}?inc=name,gender,email,phone,picture,location&noinfo&nat=us`;
    return this.http
      .get<any>(url)
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
