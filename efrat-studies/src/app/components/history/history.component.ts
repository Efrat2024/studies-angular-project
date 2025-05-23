import { Component } from '@angular/core';

@Component({
  selector: 'app-history',
  template: `
    <div>
      <h2>History Component</h2>
      <p>תוכן הקומפוננטה של הסטוריה יוצג כאן.</p>
    </div>
  `,
  styles: [
    `
      div {
        padding: 20px;
        background-color: #f9f9f9;
        border: 1px solid #ddd;
      }
    `
  ]
})
export class HistoryComponent {}