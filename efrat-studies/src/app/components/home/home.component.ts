import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div>
      <h1>Welcome to the Home Page</h1>
      <app-history></app-history>
    </div>
  `,
  styles: [
    `
      div {
        text-align: center;
        margin: 20px;
      }
    `
  ]
})
export class HomeComponent {}