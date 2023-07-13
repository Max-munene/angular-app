import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  title = 'Tic Tac Toe';
  public isAuthenticated = false;

  public logout(): void {}
  public difficulty: 'Easy' | 'Normal' | 'Hard' = 'Normal';
}
