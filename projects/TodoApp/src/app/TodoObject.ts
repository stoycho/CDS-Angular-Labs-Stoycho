export class TodoObject {

  constructor (
    public userId: number,
    public id: number,
    public title: string,
    public completed: boolean
    ) {
  }

  toggleCompleted(): void {
    this.completed = ! this.completed;
  }
}
