import { Injectable } from '@angular/core';
import { TodoObject } from './TodoObject';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { ProtoTodoObject } from './ProtoTodoObject';

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

  updateOneTodoObservable(todoObject: TodoObject): Observable<TodoObject> {
    return this.apiService.updateOneTodoObservable(todoObject);
  }

  addNewTodoObservable(newTodo: ProtoTodoObject) {
    return this.apiService.addNewTodoObservable(newTodo);
  }
}
