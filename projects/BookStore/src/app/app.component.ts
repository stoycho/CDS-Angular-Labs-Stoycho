import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Welcome to {{title}}
  `,
  styles: []
})
export class AppComponent {
  title = 'Book Store';

}
