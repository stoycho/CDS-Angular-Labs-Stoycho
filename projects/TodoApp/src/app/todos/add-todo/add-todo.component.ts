import { Component, Output, EventEmitter } from '@angular/core';
import { TodoServesService } from '../../todo-serves.service';
import { TodoWithoutId } from 'src/app/TodoWithoutId';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() addNewTodoEvent = new EventEmitter();

  constructor (private todoService: TodoServesService) {
  }

  addTodoInput(newTodoInput) {
    const newTodo: TodoWithoutId = new TodoWithoutId(1, newTodoInput.value, false);
    newTodoInput.value = "";
    this.todoService.getAddNewTodoObservable(newTodo).subscribe(
      data => {
        console.log("AddTodo Observable returned:");
        console.dir(data);
        this.addNewTodoEvent.emit(data);
      }
    );
  }
}
