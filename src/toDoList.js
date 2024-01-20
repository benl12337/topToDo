export default class toDoList {

    constructor() {
        this.list = [];
    }

    getList() {
        return this.list;
    }

    addTask(task) {
        this.list.push(task);
    };

    logTasks() {
        console.log(this.list);
    };
};

