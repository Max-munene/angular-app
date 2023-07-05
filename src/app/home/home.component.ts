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

    <div class="container">
      <div class="card-container">
        <app-homelocations
          class="card"
          *ngFor="let housingLocation of housingLocationList"
          [housingLocation]="housingLocation"
        ></app-homelocations>
      </div>
    </div>
  `,
  imports: [CommonModule, HomelocationsComponent],
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  housingLocationList: Housinglocation[] = [
    {
      id: 9999,
      name: 'Santon',
      city: 'Nairobi',
      state: 'Nai',
      photo: 'assets/home254.jpeg',
      availableUnits: 2,
      wifi: true,
      laundry: false,
    },
    {
      id: 0,
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: '/assets/home254.jpeg',
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      id: 1,
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: '/assets/home254.jpeg',
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      id: 2,
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: '/assets/home254.jpeg',
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
    {
      id: 3,
      name: 'Homesteady Housing',
      city: 'Chicago',
      state: 'IL',
      photo: '/assets/home254.jpeg',
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 4,
      name: 'Happy Homes Group',
      city: 'Gary',
      state: 'IN',
      photo: '/assets/home254.jpeg',
      availableUnits: 1,
      wifi: true,
      laundry: false,
    },
    {
      id: 5,
      name: 'Hopeful Apartment Group',
      city: 'Oakland',
      state: 'CA',
      photo: '/assets/home254.jpeg',
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 6,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: '/assets/home254.jpeg',
      availableUnits: 5,
      wifi: true,
      laundry: true,
    },
    {
      id: 7,
      name: 'Hopeful Housing Solutions',
      city: 'Oakland',
      state: 'CA',
      photo: '/assets/home254.jpeg',
      availableUnits: 2,
      wifi: true,
      laundry: true,
    },
    {
      id: 8,
      name: 'Seriously Safe Towns',
      city: 'Oakland',
      state: 'CA',
      photo: '/assets/home254.jpeg',
      availableUnits: 10,
      wifi: false,
      laundry: false,
    },
    {
      id: 9,
      name: 'Capital Safe Towns',
      city: 'Portland',
      state: 'OR',
      photo: '/assets/home254.jpeg',
      availableUnits: 6,
      wifi: true,
      laundry: true,
    },
  ];
}
