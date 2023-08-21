import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './data';
import { Observable, throwError, catchError } from 'rxjs';
import { User } from './user';
import { error } from 'highcharts';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
private url:string = './app/data.json'
// private user: User[]=[
//   {id:2 , name:'Kinuthia Njuguna', age:23},
//   {id:3 , name:'Kinu Njugu', age:20}

// ]

  constructor(private http: HttpClient ) {}

  getEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url)

  }

//   getUser():Observable<User[]>{
//     return new Observable (observer =>{
//       try{

//         setTimeout(()=>{
//           observer.next(this.user)//emit user data
//           observer.complete() //Signal completeion
//         }, 1000);
//       } catch(error){
// observer.error(error )//Emit an Error        
//       }
//     }).pipe);};
  
}
