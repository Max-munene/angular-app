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
  private baseUrl = ''; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  addUser(user: AddUser): Observable<any> {
    const url = `${this.baseUrl}/add-user`;
    return this.http.post(url, user).pipe(
      catchError((error) => {
        // Handle error here, you can log or display a user-friendly message
        throw error;
      })
    );
  }
}
