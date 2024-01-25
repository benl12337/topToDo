export default class task {
    constructor(taskName, taskDate, description) {
        this.taskName = taskName;
        this.completed = false;
        this.description = description;
        this.dueDate = taskDate;
    }

    get name() {
        return this.taskName;
    }

    set status(status) {
        this.completed = status;
    }
    get status() {
        return this.completed;
    }

    set date(date) {
        this.dueDate = date;
    }

    get date() {
        return this.dueDate;
    }

};