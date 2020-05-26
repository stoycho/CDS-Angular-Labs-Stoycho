import { Component } from '@angular/core';
import { TodoServesService } from '../todo-serves.service';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  constructor (private _todoService: TodoServesService) {

  }

  addTodo(name: string) {
    this._todoService.addTodo(name);
  }
}
