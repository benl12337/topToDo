import { compareAsc, format } from "date-fns";

export default function renderTaskDetails(task) {
    // we have task name, task description and task due date to render

    // clearing the task details container 
    const detailsContainer = document.querySelector('.details-container');
    detailsContainer.innerHTML = '';

    // add the task title
    const taskTitle = document.createElement('h2');
    taskTitle.textContent = task.name;

    // add task description
    const taskDescription = document.createElement('h3');
    taskDescription.textContent = task.description;

    // add task due date
    const taskDueDate = document.createElement('h3');
    taskDueDate.textContent = format(task.date, "dd MMM yyyy");

    // append the text elements to the details container
    detailsContainer.appendChild(taskTitle);
    detailsContainer.appendChild(taskDescription);
    detailsContainer.appendChild(taskDueDate);
};