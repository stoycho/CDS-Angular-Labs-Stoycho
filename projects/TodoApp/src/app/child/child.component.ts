import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div>parent user name: {{userNameChild}}</div>
    <button (click)="this.childEvent.emit(userName)">Sen to parent</button>
  `,
  styles: [
  ]
})
export class ChildComponent {

  @Input('userNameParent') userNameChild;

  @Output() childEvent = new EventEmitter();

  userName = 'childUserName'

}
