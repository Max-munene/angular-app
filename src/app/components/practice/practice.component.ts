import { Component } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css'],
})
export class PracticeComponent {
  public successClass = 'text-success';

  // public hasError = true;
  // public success = 'text-success';
  // public isSpecial = true;
  // public highlightColor = 'grey';
  // public greeting = '';

  // public messageClass = {
  //   'text-danger': this.hasError,
  //   'text-success': !this.hasError,
  //   'text-italic': this.isSpecial,
  // };
  // public styleClass = {
  //   color: 'green',
  //   fontStyle: 'italic',
  // };
  // onClick() {
  //   console.log('Welcome to My Youtube Channel');
  //   this.greeting = 'Hello event Binding';
  // }

  // public myMessage="Maxwell"
  logMessage(value: any) {
    console.log(value);
  }

  public name = '';

  public color = 'blue';
  public colors = ['red', 'blue', 'greeen', 'black'];
  displayName = false;
}
