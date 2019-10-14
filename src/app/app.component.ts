import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-derived [value]="'foo'"></app-derived>
  `,
  styles: [`

  `]
})
export class AppComponent {

}
