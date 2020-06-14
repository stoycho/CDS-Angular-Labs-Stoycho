export class ProtoTodoObject {
    constructor(
        public userId: number,
        public title: string,
        public completed: boolean
    ) {    
    }

    public toggleCompleted(): void {
        this.completed = ! this.completed;
    }
}