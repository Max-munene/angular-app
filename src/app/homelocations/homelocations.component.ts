import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-homelocations',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>homelocations works!</p> `,
  styleUrls: ['./homelocations.component.css'],
})
export class HomelocationsComponent {
  @Input() housingLocation!: Housinglocation;
}
