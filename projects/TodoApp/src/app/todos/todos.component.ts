import { Component, OnInit } from '@angular/core';
import { TodoObject } from '../TodoObject';
import { TodoServesService } from '../todo-serves.service';
import { ProtoTodoObject } from '../ProtoTodoObject';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: TodoObject[] = [];

  constructor(private todoService: TodoServesService){
  }

  ngOnInit() {
    this.todos = [];
    // this.todoService.allTodosObservable().subscribe(this.nextAllTodos);
    this.todoService.allTodosObservable().subscribe(data => this.nextAllTodos(data));
  }

  private nextAllTodos(httpTodos: TodoObject[]): void {
    console.log("nextAllTodos:");
    console.dir(httpTodos);
    this.todos = httpTodos;
  }

  processAddNewTodoEvent(newTodoInput) {
    const newProtoTodo: ProtoTodoObject = new ProtoTodoObject(1, newTodoInput, false);
    // this.todoService.addNewTodoObservable(newProtoTodo).subscribe(this.nextNewTodo);
    this.todoService.addNewTodoObservable(newProtoTodo).subscribe(data => this.nextNewTodo(data));
  }

  nextNewTodo(newTodo: TodoObject) {
    console.log("nextNewTodo:");
    console.dir(newTodo);
    this.todos.push(newTodo);
  }

  processRemoveTodoEvent(id: number): void {
    this.todoService.removeOneTodoObservable(id).subscribe();
    let index: number = this.findTodoIndexOfId(id);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }

  processToggleCompletedEvent(id: number): void {
    let indexFound = this.findTodoIndexOfId(id);
    if (indexFound > -1) {
      // this.todos[indexFound].toggleCompleted();
      this.todos[indexFound].completed = ! this.todos[indexFound].completed;
      this.todoService.updateOneTodoObservable(this.todos[indexFound]).subscribe(
        data => {
          console.log("returned from updateOneTodoObservable:");
          console.dir(data);
        }
      );
    }
  }

  private findTodoIndexOfId(id: number): number {
    let indexFound: number = -1;
    this.todos.forEach((element, index) => {
      if (element.id == id) {
        indexFound = index;
      }
    });
    return indexFound;
  }
}
