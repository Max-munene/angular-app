import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  template: `
    <main>
      <header class="brand-name">
        <!-- <app-navbar></app-navbar> -->
        <!-- <app-sidenav></app-sidenav> -->
      </header>
      <section class="content">
        <!-- <app-home></app-home> -->
        <app-sidenav></app-sidenav>
        <!-- <app-profile-photo></app-profile-photo> -->
        <!-- <app-profile-photo></app-profile-photo> -->
        <!-- <app-career-profile></app-career-profile> -->
        <!-- <button mat-raised-button>Hello World</button> -->
        <!-- <app-practice></app-practice> -->
        <!-- <app-login></app-login> -->
        <app-charts></app-charts>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
  // imports:[HomeComponent]
})
export class AppComponent {
  title = 'homes';
}
