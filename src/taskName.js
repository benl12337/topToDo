export default function taskName(task) {
    const newTaskName = document.createElement('p');
    newTaskName.textContent = task.taskName;

    if (task.status) {
        newTaskName.classList.add('strike');
    }

    return newTaskName;
};