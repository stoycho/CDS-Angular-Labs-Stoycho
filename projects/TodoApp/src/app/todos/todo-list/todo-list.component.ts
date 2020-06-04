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
  
  todosInList: ITodo[];

  constructor(private _todoServesService: TodoServesService){
  }

  ngOnInit() {
    this.todosInList =  this._todoServesService.getTodos();
  }
}
