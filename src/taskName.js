export default function taskName(task) {
    const newTaskName = document.createElement('p');
    newTaskName.textContent = task.name;

    if (task.status) {
        newTaskName.classList.add('strike');
    }

    return newTaskName;
};