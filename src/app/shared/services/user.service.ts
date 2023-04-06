import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, catchError, throwError } from 'rxjs';
import { ErrorService } from 'src/app/shared/services/error.service';
import UserData, { UserResult } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://randomuser.me/api/';
  seed = 123;

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient, private errorService: ErrorService) {}

  getUsersByFilters(filteredUrl: string): Observable<UserResult[]> {
    return this.http
      .get<UserData>(filteredUrl, {
        headers: this.headers,
        params: new HttpParams().append('limit', 10)
      })
      .pipe(
        map(data => {
          const userData = data.results.map((user, id) => {
            const name = Object.values(user.name).join(' ');

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

  getOneUser(): Observable<UserResult[]> {
    const userCount = 1;
    const url = `${this.apiUrl}?inc=name,gender,email,phone,picture,location&noinfo&nat=us&results=${userCount}&seed=${this.seed}`;
    return this.http
      .get<UserData>(url, {
        headers: this.headers,
        params: new HttpParams().append('limit', 1)
      })
      .pipe(
        map(data => {
          const userData = data.results.map((user, id) => {
            const name = Object.values(user.name).join(' ');
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
