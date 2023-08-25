import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface UserseLElement {
  name: string;
  email: string;
  status: string;
  id: number;
}
const ELEMENT_DATA: UserseLElement[] = [
  { name: 'Munene Muriuki', email: 'mu@g.com', status: 'Employed', id: 123 },
  { name: 'Munene Muriuki', email: 'mu@g.com', status: 'Employed', id: 123 },
  { name: 'Munene Muriuki', email: 'mu@g.com', status: 'Employed', id: 123 },
  { name: 'Munene Muriuki', email: 'mu@g.com', status: 'Employed', id: 123 },
  { name: 'Munene Muriuki', email: 'mu@g.com', status: 'Employed', id: 123 },
  { name: 'Munene Muriuki', email: 'mu@g.com', status: 'Employed', id: 123 },
  { name: 'Munene Muriuki', email: 'mu@g.com', status: 'Employed', id: 123 },
  { name: 'Munene Muriuki', email: 'mu@g.com', status: 'Employed', id: 123 },
  { name: 'Munene Muriuki', email: 'mu@g.com', status: 'Employed', id: 123 },
  { name: 'Munene Muriuki', email: 'mu@g.com', status: 'Employed', id: 123 },
];

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
  standalone: true,
  imports: [MatTableModule],
})
export class UsersTableComponent {
  displayedData: string[] = ['name', 'email', 'status', 'id'];
  dataSource = ELEMENT_DATA;
}
