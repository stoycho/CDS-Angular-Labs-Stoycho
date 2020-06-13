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

  allTodosObservable(): Observable<TodoObject[]> {
    return this.apiService.allTodosObservable();
  }

  removeAllTodosObservable(): Observable<TodoObject[]> {
    return this.apiService.removeAllTodosObservable();
  }

  oneTodoObservable(id:number): Observable<TodoObject> {
    return this.apiService.oneTodoObservable(id);
  }

  removeOneTodoObservable(id:number): Observable<TodoObject> {
    return this.apiService.removeOneTodoObservable(id);
  }

  updateOneTodoObservable(id: number, todoObject: TodoObject): Observable<TodoObject> {
    return this.apiService.updateOneTodoObservable(id, todoObject);
  }

  addNewTodoObservable(newTodo: TodoWithoutId) {
    return this.apiService.addNewTodoObservable(newTodo);
  }
}
