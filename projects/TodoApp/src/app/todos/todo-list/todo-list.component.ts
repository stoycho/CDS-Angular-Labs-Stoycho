import { Component, Input, Output, EventEmitter} from '@angular/core';
import { TodoObject } from 'src/app/TodoObject';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input("todosData") todosInList: TodoObject[];
  @Output() removeTodoEvent = new EventEmitter();
  @Output() toggleCpompletedEvent = new EventEmitter();

  processRemoveTodoEvent(id: number): void {
    this.removeTodoEvent.emit(id);
  }

  processToggleCompletedEvent(id: number): void {
    this.toggleCpompletedEvent.emit(id);
  }
}
