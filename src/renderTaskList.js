import './style.css';
import renderTaskDetails from './renderTaskDetails.js';
import taskName from './taskName.js';
import checkbox from './checkbox.js';


export default function renderTaskList(projectsList, list, fade) {
    // defining items
    const listContainer = document.querySelector('.list-container');
    listContainer.innerHTML = '';
    // render the text nodes
    list.forEach((element) => {
        // create a new div
        const newTaskDiv = document.createElement('div');
        const firstDiv = document.createElement('div');
        firstDiv.classList.add('firstDiv');
        newTaskDiv.classList.add('taskRow');

        // create a checkbox and textnode, append both
        const textNode = taskName(element);
        const dateNodeDiv = document.createElement('div');
        const dateNode = document.createElement('p');

        // calculate the difference in dates
        let dateDiff = (new Date).getTime() - (new Date(element.dueDate)).getTime();
        dateDiff = -(dateDiff / (1000 * 60 * 60 * 24));
        dateDiff = Math.round(dateDiff);  

        firstDiv.appendChild(checkbox(projectsList, list, element, textNode, dateNode));
        firstDiv.appendChild(textNode);
        newTaskDiv.appendChild(firstDiv);

        // format the date so it can be appended to the row task
        if (!element.status) {
            if (dateDiff < 0) {
                dateNode.textContent = `Due ${-dateDiff} day(s) ago`;
            } else if (dateDiff == 0) {
                dateNode.textContent = "Due today";
            } else {
                dateNode.textContent = `Due in ${dateDiff} day(s)`;
            }
            dateNodeDiv.appendChild(dateNode);
            newTaskDiv.appendChild(dateNodeDiv);
        }

        // add class to make the task fade in
        if (list[list.length - 1].taskName == element.taskName && fade) {
            newTaskDiv.classList.add('taskFade');
        }

        listContainer.appendChild(newTaskDiv);
        newTaskDiv.addEventListener('click', () => {
            renderTaskDetails(element, projectsList, list);
        });
    });
};

