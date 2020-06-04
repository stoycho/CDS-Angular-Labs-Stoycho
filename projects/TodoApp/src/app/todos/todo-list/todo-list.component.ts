import { Component, OnInit} from '@angular/core';
import {TodoServesService} from '../../todo-serves.service'
import { TodoObject } from 'src/app/TodoObject';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  
  todosInList: TodoObject[];

  constructor(private _todoServesService: TodoServesService){
  }

  ngOnInit() {
    this.todosInList =  this._todoServesService.getTodos();
  }
}
