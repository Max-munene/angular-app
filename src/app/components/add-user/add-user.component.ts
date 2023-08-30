// import { Component } from '@angular/core';
// import { error } from 'highcharts';
// import { AddUser } from 'src/app/add-user';
// import { UserService } from 'src/app/add-user.service';
// @Component({
//   selector: 'app-add-user',
//   templateUrl: './add-user.component.html',
//   styleUrls: ['./add-user.component.css'],
// })
// export class AddUserComponent {
//   userAdd = new AddUser('', '', '', '+254', '', NaN, NaN);

//   constructor(private addUsr: UserService) {}

//   onSubmit() {
//     this.addUsr.addUser(this.userAdd).subscribe(
//       (data) => {
//         console.log('Data', data);
//       },
//       (error) => {
//         console.error('Error!', error);
//       }
//     );
//   }
// }

import { Component } from '@angular/core';
import { UserService } from 'src/app/add-user.service';
import { AddUser } from 'src/app/add-user';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent {
  userAdd = new AddUser('', '', '', '+254', '', NaN, NaN);

  constructor(private userService: UserService) {}

  onSubmit() {
    this.userService
      .addUser(this.userAdd)
      .pipe(
        catchError((error) => {
          console.error('Error!', error);
          // Handle error, display message to user, etc.
          throw error; // Re-throw the error to propagate it further
        })
      )
      .subscribe((data) => {
        console.log('Data', data);
        // Reset the form or take any other action upon success
      });
  }
}
