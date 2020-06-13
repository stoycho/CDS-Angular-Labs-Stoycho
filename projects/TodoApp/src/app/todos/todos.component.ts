import { Component, OnInit } from '@angular/core';
import { TodoObject } from '../TodoObject';
import { TodoServesService } from '../todo-serves.service';
import { TodoWithoutId } from '../TodoWithoutId';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: TodoObject[] = [];

  constructor(private todoService: TodoServesService){
  }

  ngOnInit() {
    this.todos = [];
    this.todoService.getTodosObservable().subscribe(
      httpTodos => this.nextHttpTodos(httpTodos)
    );
  }

  private nextHttpTodos(httpTodos: TodoObject[]): void {
    console.dir(httpTodos);
    this.todos = httpTodos;
  }

  addTodo(newTodo: TodoObject) {
    this.todos.push(newTodo);
  }
}
