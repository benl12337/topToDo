import { compareAsc, format } from "date-fns";
import renderTaskList from "./renderTaskList";

export default function renderTaskDetails(task, projectsList, list) {
    // we have task name, task description and task due date to render
    // clearing the task details container 
    const detailsContainer = document.querySelector('.details-container');
    detailsContainer.innerHTML = '';

    // add the task title
    const taskTitle = document.createElement('h2');
    taskTitle.textContent = task.taskName;

    // add task description
    const taskDescription = document.createElement('h3');
    taskDescription.textContent = task.description;

    // add task due date
    const taskDueDate = document.createElement('h3');
    taskDueDate.textContent = format(task.dueDate, "dd MMM yyyy");

    // add delete button
    const taskDeleteBtn = document.createElement('button');
    taskDeleteBtn.textContent = 'Delete';

    taskDeleteBtn.addEventListener('click', ()=>{
        const index = list.indexOf(task);
        list.splice(index, 1);

        // re-render task list
        renderTaskList(projectsList, list, false);
        detailsContainer.innerHTML = '';

        // write this to storage
        localStorage.setItem("projectsList", JSON.stringify(projectsList));
    });

    // append the text elements to the details container
    detailsContainer.appendChild(taskTitle);
    detailsContainer.appendChild(taskDescription);
    detailsContainer.appendChild(taskDueDate);
    detailsContainer.appendChild(taskDeleteBtn);
};