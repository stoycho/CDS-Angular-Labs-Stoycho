import { Component, OnInit} from '@angular/core';
import {TodoServesService} from '../../todo-serves.service'

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  
  todos: ITodo[] = [];

  constructor(private _todoServesService:TodoServesService){
    this._todoServesService.fetchTodos().subscribe(
      data => {
        this.todos = data;
        this._todoServesService.setTodos(this.todos);
      }
    );
  }

  toggleComplete(id){
    this.todos[id-1].completed = !this.todos[id-1].completed;
  }
}
