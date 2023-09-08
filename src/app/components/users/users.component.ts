import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MatDialogModule,
} from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { UsersTableComponent } from '../users-table/users-table.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  @ViewChild(UsersTableComponent) userTable!: UsersTableComponent;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  openDialog() {
    const dialogRef: MatDialogRef<AddUserComponent> = this.dialog.open(
      AddUserComponent,
      { width: '30%' }
    );

    dialogRef.afterClosed().subscribe((result) => {
      // console.log('Dialog result: ${result}');
      console.log('Refresh!', this.userTable.ngOnInit());
    });
  }
}
