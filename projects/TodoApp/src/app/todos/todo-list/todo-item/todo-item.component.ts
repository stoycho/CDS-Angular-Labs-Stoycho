import { Component, Input } from '@angular/core';
import { TodoServesService } from 'src/app/todo-serves.service';
import { TodoObject } from 'src/app/TodoObject';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todoItem: TodoObject;

  constructor(private _todoServes: TodoServesService){}

  removeTodo(id): void{
    this._todoServes.removeTodo(id);
  }
  toggleCompleted(id): void {
    this._todoServes.toggleCompleted(id);
  }
}
