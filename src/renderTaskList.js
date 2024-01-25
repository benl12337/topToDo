import './style.css';
import renderTaskDetails from './renderTaskDetails.js';
import taskName from './taskName.js';
import checkbox from './checkbox.js';
import format from "date-fns";


export default function renderTaskList(list, fade) {
    // defining items
    const listContainer = document.querySelector('.list-container');
    listContainer.innerHTML = '';

    // render the text nodes
    list.forEach((element) => {

        // create a new div
        const newTaskDiv = document.createElement('div');
        newTaskDiv.classList.add('taskRow');

        // create a checkbox and textnode, append both
        const textNode = taskName(element);
        const dateNode = document.createElement('p');
        newTaskDiv.appendChild(checkbox(element, textNode));
        newTaskDiv.appendChild(textNode);

        // create a new div that displays the overdue
        dateNode.textContent = element.date;
        
        newTaskDiv.appendChild(dateNode);

        // add class to make the task fade in
        if (list[list.length - 1].name == element.name && fade) {
            newTaskDiv.classList.add('taskFade');
        }
        listContainer.appendChild(newTaskDiv);

        newTaskDiv.addEventListener('click', () => {
            renderTaskDetails(element);
        });
    });
};

