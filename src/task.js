export default class task {
    constructor(taskName) {
        this.taskName = taskName;
        this.completed = false;
    }

    get name() {
        return this.taskName;
    }

    get status() {
        return this.completed;
    }

    set status(status) {
        this.completed = status;
    }
};