import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { TodoObject } from './TodoObject';

@Injectable({
  'providedIn':'root'
})
export class TodoServesService {
  todos: TodoObject[];

  todosUrl = "http://my-json-server.typicode.com/stoycho/json-fake-server/todos";

  constructor(private http: HttpClient) {
    this.todos = [];
  }

  getTodosObservable(): Observable<TodoObject[]> {
    return this.http.get<TodoObject[]>(this.todosUrl).pipe(
      catchError( err => this.handleHttpError(err))
    );
  }

  getAddTodoObservable(todoTitle: string) {
    return this.http.post(this.todosUrl, {title:todoTitle}).pipe(
      catchError( err => this.handleHttpError(err))
    );
  }

  handleHttpError(err) {
    if (err instanceof HttpErrorResponse) {
      console.log("HttpErrorResponse received back:");
      alert(err.error.split("\n")[0]);
    }
    if (err instanceof ErrorEvent) {
      console.log("ErrorEvent received:");
    }
    console.dir(err);
    return throwError(err);
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

  private findIndex(todoId: number): number {
    return this.todos.findIndex((a: TodoObject) => {
      return (a.id == todoId);
    })
  }
}
