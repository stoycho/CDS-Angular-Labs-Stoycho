import { Component,  } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <p>userName in Parent: {{userName}}</p>

    <button (click)=handleClickEvent($event)>OK</button>

    <app-child
      [userNameParent]="userName"
      (childEvent)="changeUserNameParent($event)"
    ></app-child>
  `,
  styles: [
  ]
})
export class ParentComponent {
  userName = 'pesho';

  changeUserNameParent(param){
    console.dir(`Event param from child: ${param}`);
    this.userName = 'child was clicked';
  }

  handleClickEvent(param){
    console.dir(`DOM Event param : ${param}`);
  }
}
