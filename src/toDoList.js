export default class toDoList {

    constructor(projectName) {
        this.name = projectName;
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

