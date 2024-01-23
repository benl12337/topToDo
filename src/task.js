export default class task {
    constructor(taskName, taskDate) {
        this.taskName = taskName;
        this.completed = false;
        this.dueDate = taskDate;
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

    set date(date) {
        this.dueDate = date;
    }

    get date() {
        return this.dueDate;
    }
};