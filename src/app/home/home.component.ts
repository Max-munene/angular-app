import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <h1>{{ title }}</h1>
      <p>home works!</p>
    </div>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'Home is where the heart is';
}
