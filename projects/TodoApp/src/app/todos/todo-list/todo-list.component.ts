import { Component, OnInit} from '@angular/core';
import {TodoServesService} from '../../todo-serves.service'

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  todos = [];

  constructor(private _todoServesService:TodoServesService){
    this.todos = this._todoServesService.getTodos();
  }

  toggleComplete(id){
    // console.log('>>> toggleComplete is active <<<');
    this.todos[id-1].complete = !this.todos[id-1].complete;
  }

  // keyUpHandler(newTodoTitle){
  //   this.addNewTodo(newTodoTitle)
  // }
}
