import './style.css';
import taskName from './taskName.js';
import checkbox from './checkbox.js';


export default function renderTaskList(list) {

    // defining items
    const listContainer = document.querySelector('.list-container');
    listContainer.innerHTML = '';

    // render the text nodes
    list.forEach((element) => {

        const newTaskDiv = document.createElement('div');
        newTaskDiv.classList.add('taskRow');

        const textNode = taskName(element);
        newTaskDiv.appendChild(checkbox(element ,textNode));
        newTaskDiv.appendChild(textNode);
        listContainer.appendChild(newTaskDiv);
    });
};

