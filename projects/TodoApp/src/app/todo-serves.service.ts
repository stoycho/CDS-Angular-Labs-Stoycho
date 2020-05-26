import { Injectable } from '@angular/core';

@Injectable({
  'providedIn':'root'
})
export class TodoServesService {
  todos = [
    {
      'name': 'todo1',
      'complete': false
    },
    {
      'name': 'todo2',
      'complete': true
    },
    {
      'name': 'todo3',
      'complete': false
    },
  ]

  constructor() { }

  getTodos(){
    return this.todos;
  }

  removeTodo(index){
    this.todos.splice(index,1);
  }

  addTodo(name: string) {
    let newTodo = {
      'name': name,
      'complete': false
    }
    this.todos.push(newTodo);
  }
}
