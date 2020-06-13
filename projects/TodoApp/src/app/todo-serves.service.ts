import { Injectable } from '@angular/core';
import { TodoObject } from './TodoObject';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { TodoWithoutId } from './TodoWithoutId';

@Injectable({
  'providedIn':'root'
})
export class TodoServesService {

  constructor(private apiService: ApiService) {
  }

  getTodosObservable(): Observable<TodoObject[]> {
    return this.apiService.getTodosObservable();
  }

  getDeleteTodosObservable(): Observable<TodoObject[]> {
    return this.apiService.getDeleteTodosObservable();
  }

  getOneTodoObservable(id:number): Observable<TodoObject> {
    return this.apiService.getOneTodoObservable(id);
  }

  getRemoveOneTodoObservable(id:number): Observable<TodoObject> {
    return this.apiService.getRemoveOneTodoObservable(id);
  }

  getUpdateOneTodoObservable(id: number, todoObject: TodoObject): Observable<TodoObject> {
    return this.apiService.getUpdateOneTodoObservable(id, todoObject);
  }

  getAddNewTodoObservable(newTodo: TodoWithoutId) {
    return this.apiService.getAddNewTodoObservable(newTodo);
  }
}
