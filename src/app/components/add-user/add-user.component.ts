import { Component } from '@angular/core';
import { AddUser } from 'src/app/add-user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  userAdd = new AddUser('', '', '', +254, '', NaN, NaN);

  onSubmit() {
    console.log(this.userAdd);
  }
}
