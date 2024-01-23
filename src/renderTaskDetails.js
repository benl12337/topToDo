import { compareAsc, format } from "date-fns";

export default function renderTaskDetails(task) {
    const detailsContainer = document.querySelector('.details-container');
    detailsContainer.innerHTML = '';

    const taskTitle = document.createElement('h2');
    taskTitle.textContent = task.name;

    const taskDate = document.createElement('h4');
    taskDate.textContent = format(task.date, "yyyy-MM-dd");

    detailsContainer.appendChild(taskTitle);
    detailsContainer.appendChild(taskDate);

};