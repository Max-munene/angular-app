import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  template: ` <h1>Welcome {{ name }}</h1>
    <h2>{{ 2 + 2 }}</h2>
    <h2>{{ 'Where are you learning ' + name + name.length }}</h2>
    <h1>{{ greetUser() }}</h1>
    <h2>{{ siteUrl }}</h2>

    <input type="text" [id]="myid" value="Maxwelli" />
    <input
      bind-disabled="isDisabled"
      type="text"
      id="{{ myi2 }}"
      value="Maxwelli"
    />`,
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  public name = 'Codevolution';

  public siteUrl = window.location.href;

  public myid = 'property-binding';
  public myi2 = 'interporlation';

  public isDisabled = true;

  greetUser() {
    return 'Hello ' + this.name;
  }
}
