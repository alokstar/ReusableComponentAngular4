import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<app-widget></app-widget><br><app-widget></app-widget>`,
})
export class AppComponent  { name = 'Angular'; }
