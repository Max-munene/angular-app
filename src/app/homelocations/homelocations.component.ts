import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-homelocations',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <div class="image">
        <img
          class="listing-photo"
          [src]="housingLocation.photo"
          alt="Exterior photo of {{ housingLocation.name }}"
        />
      </div>
      <div class="details">
        <h1 class="listing-heading">{{ housingLocation.name }}</h1>
        <p class="listing-location">
          {{ housingLocation.city }}, {{ housingLocation.state }}
        </p>

      </div>
    </div>
  `,
  styleUrls: ['./homelocations.component.css'],
})
export class HomelocationsComponent {
  @Input() housingLocation!: Housinglocation;
}
