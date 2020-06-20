import { ProtoTodoObject } from './ProtoTodoObject';

export class TodoObject extends ProtoTodoObject {
  public id: number;
  constructor(todoLikeObj: TodoObject) {
    super(todoLikeObj.userId, todoLikeObj.title, todoLikeObj.completed);
    this.id = todoLikeObj.id;
  }
}
