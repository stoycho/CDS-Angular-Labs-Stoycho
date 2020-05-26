import { Component, Input } from '@angular/core';
import { TodoServesService } from 'src/app/todo-serves.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input('todoParentProp') todoName;
  @Input() todoIndex;
  index: number;

  constructor(private _todoServes: TodoServesService){}

  removeTodo(index){
    this._todoServes.removeTodo(index);
  }
}
