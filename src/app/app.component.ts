import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <header class="brand-name">
        <app-navbar></app-navbar>
      </header>
      <section class="content">
        <app-sidenav></app-sidenav>
        <!-- <app-home></app-home> -->
        <div></div>
        <!-- <app-profile-photo></app-profile-photo> -->
        <!-- <app-profile-photo></app-profile-photo> -->
        <app-career-profile></app-career-profile>
        <button mat-raised-button>Hello World</button>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
  // imports:[HomeComponent]
})
export class AppComponent {
  title = 'homes';
}
