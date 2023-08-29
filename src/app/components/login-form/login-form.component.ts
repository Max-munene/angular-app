import { Component } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormControl } from '@angular/forms';
import { LoginModel } from 'src/app/login-model';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  // imports:[FormControl]
  // imports:[MatFormFieldModule,MatIconModule,MatInputModule],
})
export class LoginFormComponent {
  hide: boolean = false;
  userLogin = new LoginModel('', '', '', '');
}
