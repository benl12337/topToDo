import './style.css';
import renderTaskDetails from './renderTaskDetails.js';
import taskName from './taskName.js';
import checkbox from './checkbox.js';


export default function renderTaskList(list, fade) {

    // defining items
    const listContainer = document.querySelector('.list-container');
    listContainer.innerHTML = '';

    // render the text nodes
    list.forEach((element) => {

        const newTaskDiv = document.createElement('div');
        newTaskDiv.classList.add('taskRow');

        const textNode = taskName(element);
        newTaskDiv.appendChild(checkbox(element, textNode));
        newTaskDiv.appendChild(textNode);


        if (list[list.length - 1].name == element.name && fade) {
            newTaskDiv.classList.add('taskFade');
        }
        listContainer.appendChild(newTaskDiv);

        textNode.addEventListener('click', () => {
            renderTaskDetails(element);
        });
    });
};

