import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  template: `
    <h2 [style.border]="'5px solid red'"
      [class.red] = 'setRedClass'
      id='h2'
    >Variable interpolation</h2>
    <input type="text" id='i1'
      [class.red] = 'setRedClass'
      [value]='userName'
      [disabled]="disableEditName"
      [attr.data-logged]="userLoggedIn"
      >
    <div>

    <button (click)="toggleRedClass()">Toggle red class</button>


      <button (click)="changeColorClass()">changeColorClass</button>
    </div>

    <!-- <ng-template [ngIf]='true'>
      test ng if
    </ng-template> -->

  `,
  styles: [`
    .border{
      border: 5px solid red;
    }
    .red{
      background: #F99;
    }
    .green{
      background: #9F9;
    }
    .big{
      font-size: 4em;
    }
  `]
})
export class DataBindingComponent {
  userName = 'Ada';
  userLoggedIn = 'yes';
  disableEditName = false;

  multipleClasses = {
    'red': false,
    'big': true
  }

  setColorClass = 'red';

  setRedClass = true;

  changeColorClass(){
    this.setColorClass = 'green'
  }

  toggleRedClass(){
    this.setRedClass = !this.setRedClass;
  }

}
