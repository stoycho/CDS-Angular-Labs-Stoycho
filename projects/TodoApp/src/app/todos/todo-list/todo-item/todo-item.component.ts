import { Component, Input } from '@angular/core';
import { TodoServesService } from 'src/app/todo-serves.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input('itemName') todoName;
  @Input() todoIndex;

  constructor(private _todoServes: TodoServesService){}

  removeTodo(id): void{
    this._todoServes.removeTodo(id);
  }
  toggleCompleted(id): void {
    this._todoServes.toggleCompleted(id);
  }
}
