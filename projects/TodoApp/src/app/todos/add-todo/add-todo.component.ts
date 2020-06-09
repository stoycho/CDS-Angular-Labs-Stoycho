import { Component } from '@angular/core';
import { TodoServesService } from '../../todo-serves.service';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  constructor (private todoService: TodoServesService) {

  }

  addTodo(todoTitle: string) {
    this.todoService.getAddTodoObservable(todoTitle).subscribe(
      data => {
        console.log("AddTodo Observable returned:");
        console.dir(data)
      }
    );
  }
}
