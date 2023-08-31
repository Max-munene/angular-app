import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { error } from 'highcharts';
import { UserService } from 'src/app/add-user.service';

export interface UserseLElement {
  name: string;
  email: string;
  status: string;
  id: number;
}
// const ELEMENT_DATA: UserseLElement[] = [
//   { name: 'Munene Muriuki', email: 'mu@g.com', status: 'Employed', id: 123 },
//   { name: 'Munene Muriuki', email: 'mu@g.com', status: 'Employed', id: 123 },
//   { name: 'Munene Muriuki', email: 'mu@g.com', status: 'Employed', id: 123 },
//   { name: 'Munene Muriuki', email: 'mu@g.com', status: 'Employed', id: 123 },
//   { name: 'Munene Muriuki', email: 'mu@g.com', status: 'Employed', id: 123 },
//   { name: 'Munene Muriuki', email: 'mu@g.com', status: 'Employed', id: 123 },
//   { name: 'Munene Muriuki', email: 'mu@g.com', status: 'Employed', id: 123 },
//   { name: 'Munene Muriuki', email: 'mu@g.com', status: 'Employed', id: 123 },
//   { name: 'Munene Muriuki', email: 'mu@g.com', status: 'Employed', id: 123 },
//   { name: 'Munene Muriuki', email: 'mu@g.com', status: 'Employed', id: 123 },
// ];

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
  standalone: true,
  imports: [MatTableModule],
})
export class UsersTableComponent {
  displayedData: string[] = [
    'firstName',
    'secondName',
    'email',
    'phoneNumber',
    'address',
    'age',
    'userNumber',
  ];

  dataSource = new MatTableDataSource();
  url = 'http://localhost:3000/get-user';

  constructor(private http: UserService) {}

  ngOnInit() {
    this.http.getUser(this.url).subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource = res;
      },
      error: (res) => {
        console.error('This Error!', res);
      },
    });
  }
}
