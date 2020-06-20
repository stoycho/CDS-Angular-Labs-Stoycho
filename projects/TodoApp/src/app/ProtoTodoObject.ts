export class ProtoTodoObject {

    constructor(
        public userId: number,
        public title: string,
        public completed: boolean
    ) {
    }

    toggleCompleted(): void {
        this.completed = ! this.completed;
    }
}