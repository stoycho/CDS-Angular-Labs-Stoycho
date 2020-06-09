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

  constructor(private todoService: TodoServesService){
  }

  ngOnInit() {
    this.todosInList = [];
    this.todoService.getTodosObservable().subscribe(
      data => this.nextHttpTodos(data)
    );
  }

  private nextHttpTodos(httpTodos: TodoObject[]): void {
    this.todosInList = httpTodos;
  }
}
