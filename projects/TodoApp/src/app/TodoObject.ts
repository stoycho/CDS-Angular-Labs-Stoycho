import { TodoWithoutId } from './TodoWithoutId';

export class TodoObject extends TodoWithoutId {
  public id: number;

  constructor(todoAsString: string) {
    let newTodo: TodoObject = JSON.parse(todoAsString);
    super(newTodo.userId, newTodo.title, newTodo.completed);
    this.id = newTodo.id;
  }
}
