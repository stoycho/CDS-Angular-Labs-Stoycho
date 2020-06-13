import { Component, OnInit, Input} from '@angular/core';
import {TodoServesService} from '../../todo-serves.service'
import { TodoObject } from 'src/app/TodoObject';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input("todosData") todosInList: TodoObject[];

  constructor(private todoService: TodoServesService){
  }
}
