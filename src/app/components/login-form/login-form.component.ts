import { Component } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  // imports:[MatFormFieldModule,MatIconModule,MatInputModule],
})
export class LoginFormComponent {}
