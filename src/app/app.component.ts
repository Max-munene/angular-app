import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
// import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // imports:[HomeComponent]
})
export class AppComponent {
  title = 'homes';
}
