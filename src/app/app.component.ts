import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './components/header/header.component.html',
  template: `<app-header></app-header>
  <router-outlet></router-outlet>
  `,
  styleUrls: []
})
export class AppComponent {
  title = 'angularshop';
}
