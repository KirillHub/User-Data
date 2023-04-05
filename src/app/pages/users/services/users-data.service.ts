import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable, catchError, throwError, map } from 'rxjs';
import UserData, { UserResult } from 'src/app/pages/users/models/User.model';
import { ErrorService } from '../../../shared/services/error.service';

@Injectable()
export class UsersDataService extends DefaultDataService<any> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private errorService: ErrorService
  ) {
    super('UsersData', http, httpUrlGenerator);
  }

  numberOfRequestedUsers = 10;
  private apiUrl = 'https://randomuser.me/api/';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  override getAll(): Observable<UserResult[]> {
    const url = `${this.apiUrl}?inc=name,gender,email,phone,picture,location&noinfo&nat=us&results=${this.numberOfRequestedUsers}`;
    return this.http
      .get<UserData>(url, {
        headers: this.headers,
        params: new HttpParams().append('limit', 10)
      })
      .pipe(
        map(data => {
          const userData = data.results.map((user, id) => {
            const name = Object.values(user.name).join(' ');

            /**
             * @see in this case i will use id to identify the user. Logged in user - randomly received id
             */

            return { ...user, name, id };
          });
          return userData;
        })
      )
      .pipe(
        catchError((error: unknown) => {
          this.errorService.handle(error);
          return throwError(() => error);
        })
      );
  }
}
