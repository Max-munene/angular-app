import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  template:  `
  <main>
    <header class="brand-name">
      <div class="nav">
        <div class="navbar">
      <img class="brand-logo" src="/assets/logo.svg" alt="Homes" aria-hidden="true">
      </div>
      </div>
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
`,
  styleUrls: ['./app.component.css'],
  // imports:[HomeComponent]
})
export class AppComponent {
  title = 'homes';
}
