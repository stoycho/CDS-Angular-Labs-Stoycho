import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ITodo } from './todos/todo-list/todo-list.component';
import { ElementFinder } from 'protractor';

@Injectable({
  'providedIn':'root'
})
export class TodoServesService {
  todos: ITodo[] = [];

  todosUrl = "http://my-json-server.typicode.com/stoycho/json-fake-server/todos";

  constructor(private http: HttpClient) {
  }

  fetchTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(this.todosUrl);
  }

  setTodos(todos: ITodo[]): void {
    this.todos = todos;
  }

  getTodos():ITodo[]{
    return this.todos;
  }

  removeTodo(idToDelete): void{
    this.todos.forEach((element, i) => {
      if (idToDelete == element.id) {
        this.todos.splice(i,1);
        return;
      }
    });
  }

  addTodo(name: string): void {
    let newTodo = {
      "userId": 1,
      "id": this.getId(),
      "title": name,
      "completed": false
    }
    this.todos.push(newTodo);
    console.dir(newTodo);
  }

  getId(): number {
    let id: number = 1;
    this.todos.sort((a:ITodo, b:ITodo) => {
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
