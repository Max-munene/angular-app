import { Component } from '@angular/core';

@Component({
  selector: 'app-class-bind',
  template: `<h1 [class]="successClass">BrimTech</h1>
    <h1 class="text-success" [class]="successClass">BrimTech</h1>

    <h1 [class.text-danger]="hasError">Error</h1>

    <h1 [ngClass]="messageClasses">Bazuu Kuruka</h1>`,
  styleUrls: ['./class-bind.component.css'],
})
export class ClassBindComponent {
  public successClass = 'text-special';

  public hasError = true;

  public isSpecial = true;

  public messageClasses = {
    'text-danger': this.hasError,
    'text-success': !this.hasError,
    'text-special': this.isSpecial,
  };
}
