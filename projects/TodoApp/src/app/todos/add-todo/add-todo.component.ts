import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() addNewTodoEvent: EventEmitter<String> = new EventEmitter();

  addTodoInput(newTodoInput) {
    this.addNewTodoEvent.emit(newTodoInput.value);
    newTodoInput.value = "";
  }
}
