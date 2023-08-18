import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomelocationsComponent } from '../homelocations/homelocations.component';
import { AppRoutingModule } from '../app-routing.module';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl:'./home.component.html',
  imports: [CommonModule, HomelocationsComponent, AppRoutingModule],
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
  ];
}
