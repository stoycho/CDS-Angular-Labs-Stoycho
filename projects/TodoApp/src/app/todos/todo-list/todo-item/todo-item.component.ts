import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoObject } from 'src/app/TodoObject';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todoItem: TodoObject;
  @Output() removeTodoEvent = new EventEmitter();
  @Output() toggleCompletedEvent = new EventEmitter();

  removeButtonClick(id): void{
    this.removeTodoEvent.emit(id);
  }

  toggleCompletedClick(id): void {
    this.toggleCompletedEvent.emit(id);
  }
}
