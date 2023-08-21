import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './data';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
private url:string = './app/data.json'

  constructor(private http: HttpClient ) {}

  getEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url)

  }
}
