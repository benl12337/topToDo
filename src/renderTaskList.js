import './style.css';
import renderTaskDetails from './renderTaskDetails.js';
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

        
        setTimeout(()=>{
            listContainer.appendChild(newTaskDiv);
        }, 50);
        
        if (list[list.length - 1].name == element.name) {
            newTaskDiv.classList.add('taskFade');
        }

        textNode.addEventListener('click', ()=>{
            renderTaskDetails(element);
        });

        
    });
};

