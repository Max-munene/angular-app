// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { AddUser } from './add-user';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class AddUserService {
//   url = '';
//   constructor(private http: HttpClient) {}

//   add(add: AddUser) {
//     return this.http.post<any>(this.url, add);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AddUser } from './add-user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:3000/add-user'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  addUser(user: AddUser): Observable<any> {
    // const url = `${this.baseUrl}`;
    return this.http.post(this.baseUrl, user).pipe(
      catchError((error) => {
        console.error('Error', error);
        throw error;
      })
    );
  }
}
