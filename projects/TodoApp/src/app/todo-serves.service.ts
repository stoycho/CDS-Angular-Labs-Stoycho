import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { TodoObject } from './TodoObject';

@Injectable({
  'providedIn':'root'
})
export class TodoServesService {
  todos: TodoObject[];

  todosUrl = "http://my-json-server.typicode.com/stoycho/json-fake-server/todos";

  constructor(private http: HttpClient) {
    this.todos = [];
    this.httpTodosObservable().subscribe(data => this.nextHttpTodos(data));
  }

  private nextHttpTodos(httpTodos: TodoObject[]): void {
    httpTodos.forEach(element => {
      this.todos.push(element);
    });
  }

  private httpTodosObservable(): Observable<TodoObject[]> {
    return this.http.get<TodoObject[]>(this.todosUrl);
  }

  getTodos(): TodoObject[]{
    return this.todos;
  }

  removeTodo(idToDelete: number): void{
    let index: number = this.findIndex(idToDelete);
    if (index >= 0) {
      this.todos.splice(index,1);
    }
  }

  toggleCompleted(idToToggle: number): void {
    let index: number = this.findIndex(idToToggle);
    if (index >= 0) {
      this.todos[index].toggleCompleted();
    }
  }

  addTodo(name: string): void {
    let newTodo: TodoObject = new TodoObject(1, this.getId(), name, false);
    this.todos.push(newTodo);
  }

  private findIndex(todoId: number): number {
    return this.todos.findIndex((a: TodoObject) => {
      return (a.id == todoId);
    })
  }

  private getId(): number {
    let id: number = 1;
    this.todos.sort((a: TodoObject, b: TodoObject) => {
      if (a.id < b.id) {
        return -1;
      } else if (a.id === b.id) {
        return 0;
      } else {
        return 1;
      }
    }).forEach(element => {
      if (element.id === id) {
        id = id + 1;
      }
    });
    return id;
  }
}
