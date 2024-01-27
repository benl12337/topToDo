export default function task(taskName, taskDate, description) {
    this.taskName = taskName;
    this.completed = false;
    this.description = description;
    this.dueDate = taskDate;
};