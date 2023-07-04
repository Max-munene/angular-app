import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomelocationsComponent } from '../homelocations/homelocations.component';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <section class="section">
      <form>
        <input type="text" placeholder="Filter by City" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-homelocations
        [housingLocation]="housingLocation"
      ></app-homelocations>
    </section>
  `,
  imports: [CommonModule, HomelocationsComponent],
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingLocation: Housinglocation = {
    id: 9999,
    name: 'Santon',
    city: 'Nairobi',
    state: 'Nai',
    photo: 'assets/Home.svg',
    availableUnits: 2,
    wifi: true,
    laundry: false,
  };
}
