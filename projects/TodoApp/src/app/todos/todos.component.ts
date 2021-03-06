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
  }

  processInitListEvent() {
    // this.todoService.allTodosObservable().subscribe(this.nextAllTodos);
    this.todoService.allTodosObservable().subscribe(data => this.nextAllTodos(data));
  }

  private nextAllTodos(httpTodos: TodoObject[]): void {
    console.log("nextAllTodos:");
    console.dir(httpTodos);
    this.todos = [];
    httpTodos.forEach(element => {
      this.todos.push(new TodoObject(element));
    });
  }

  processAddNewTodoEvent(newTodoInputValue: string) {
    const newProtoTodo: ProtoTodoObject = new ProtoTodoObject(1, newTodoInputValue, false);
    // this.todoService.addNewTodoObservable(newProtoTodo).subscribe(this.nextNewTodo);
    this.todoService.addNewTodoObservable(newProtoTodo).subscribe(data => this.nextNewTodo(data));
  }

  nextNewTodo(newTodo: TodoObject) {
    console.log("nextNewTodo:");
    console.dir(newTodo);
    this.todos.push(new TodoObject(newTodo));
  }

  processRemoveTodoEvent(id: number): void {
    this.todoService.removeOneTodoObservable(id).subscribe(
      () => {
        let index: number = this.findTodoIndexOfId(id);
        if (index > -1) {
          this.todos.splice(index, 1);
          // this.todos = this.todos.filter(todo => todo.id != id);
        }
      },
      (err) => console.log(err)
    );
  }

  processToggleCompletedEvent(id: number): void {
    let indexFound = this.findTodoIndexOfId(id);
    if (indexFound > -1) {
      console.dir(this.todos[indexFound]);
      this.todos[indexFound].toggleCompleted();
      // this.todos[indexFound].completed = ! this.todos[indexFound].completed;
      this.todoService.updateOneTodoObservable(this.todos[indexFound]).subscribe(
        data => {
          console.log("returned from updateOneTodoObservable:");
          console.dir(data);
        }
      );
    }
  }

  private findTodoIndexOfId(id: number): number {
    return this.todos.findIndex((todoElement) => todoElement.id == id);
  }
}
