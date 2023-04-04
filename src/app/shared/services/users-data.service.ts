import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Observable, catchError, throwError } from 'rxjs';
import UserData from 'src/app/pages/users/models/User.model';
import { ErrorService } from './error.service';

@Injectable()
export class UsersDataService extends DefaultDataService<any> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private errorService: ErrorService
  ) {
    super('UsersData', http, httpUrlGenerator);
  }

  private apiUrl = 'https://randomuser.me/api/';
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  override getAll(): Observable<UserData[]> {
    const url = `${this.apiUrl}?inc=name,gender,email,phone,picture,location&noinfo&nat=us`;
    return this.http
      .get<UserData[]>(url, {
        headers: this.headers,
        params: new HttpParams().append('limit', 1)
      })
      .pipe(
        catchError((error: unknown) => {
          this.errorService.handle(error);
          return throwError(() => error);
        })
      );
  }
}

/*
 map(data => {
        const userData: UserData[] = [];
        for (const key of data) {
          userData.push({ ...data[key] });
        }
        return userData;
      })
*/
/*
const a: UserData = {
  results: [
    {
      gender: 'male',
      name: { title: 'Mr', first: 'Ralph', last: 'Wallace' },
      location: {
        street: { number: 5943, name: 'Paddock Way' },
        city: 'Syracuse',
        state: 'Washington',
        country: 'United States',
        postcode: 92064,
        coordinates: { latitude: '26.1285', longitude: '-43.2046' },
        timezone: { offset: '-3:30', description: 'Newfoundland' }
      },
      email: 'ralph.wallace@example.com',
      phone: '(567) 240-9393',
      picture: {
        large: 'https://randomuser.me/api/portraits/men/90.jpg',
        medium: 'https://randomuser.me/api/portraits/med/men/90.jpg',
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/90.jpg'
      }
    }
  ]
};

console.log(a);
*/
