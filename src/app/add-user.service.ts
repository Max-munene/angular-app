import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
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
        console.error('Error!', error);
        throw error;
      })
    );
  }
  url = 'http://localhost:3000/get-user';
  getUser(url: string): Observable<any> {
    return this.http.get(url);
  }

  private _listeners = new Subject<any>();
  listen():Observable<any>{
 return this._listeners.asObservable()
  }
  filter(filterBy:string){
    return  this._listeners.next(filterBy)
  }
}
