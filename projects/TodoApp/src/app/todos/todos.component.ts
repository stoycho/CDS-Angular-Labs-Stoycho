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
    // this.todoService.allTodosObservable().subscribe(this.nextAllTodos);
    this.todoService.allTodosObservable().subscribe(data => this.nextAllTodos(data));
  }

  private nextAllTodos(httpTodos: TodoObject[]): void {
    console.log("nextAllTodos:");
    console.dir(httpTodos);
    this.todos = httpTodos;
  }

  processAddNewTodoEvent(newTodoInput) {
    const newProtoTodo: TodoWithoutId = new TodoWithoutId(1, newTodoInput, false);
    // this.todoService.addNewTodoObservable(newProtoTodo).subscribe(this.nextNewTodo);
    this.todoService.addNewTodoObservable(newProtoTodo).subscribe(data => this.nextNewTodo(data));
  }

  nextNewTodo(newTodo: TodoObject) {
    console.log("AddTodo Observable returned:");
    console.dir(newTodo);
    this.todos.push(newTodo);
  }
}
