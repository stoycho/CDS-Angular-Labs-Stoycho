import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { TodoObject } from './TodoObject';
import { catchError } from 'rxjs/operators';
import { TodoWithoutId } from './TodoWithoutId';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // todosUrl = "http://my-json-server.typicode.com/stoycho/json-fake-server/todos";
  todosUrl = "http://localhost:3000/todos";

  constructor(private http: HttpClient) {
  }

  allTodosObservable(): Observable<TodoObject[]> {
    return this.http.get<TodoObject[]>(this.todosUrl).pipe(
      catchError( err => this.handleHttpError(err))
    );
  }

  removeAllTodosObservable(): Observable<TodoObject[]> {
    return this.http.delete<TodoObject[]>(this.todosUrl).pipe(
      catchError( err => this.handleHttpError(err))
    );
  }

  oneTodoObservable(id:number): Observable<TodoObject> {
    return this.http.get<TodoObject>(`${this.todosUrl}/${id}`).pipe(
      catchError( err => this.handleHttpError(err))
    );
  }

  removeOneTodoObservable(id:number): Observable<TodoObject> {
    return this.http.delete<TodoObject>(`${this.todosUrl}/${id}`).pipe(
      catchError( err => this.handleHttpError(err))
    );
  }

  updateOneTodoObservable(id:number, todoObject: TodoObject): Observable<TodoObject> {
    return this.http.put<TodoObject>(`${this.todosUrl}/${id}`, todoObject).pipe(
      catchError( err => this.handleHttpError(err))
    );
  }

  addNewTodoObservable(newTodo: TodoWithoutId) {
    return this.http.post<TodoObject>(this.todosUrl, newTodo).pipe(
      catchError(this.handleHttpError)
    );
  }

  handleHttpError(err: any): Observable<never> {
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
}
