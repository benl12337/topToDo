import './style.css';
import checkbox from './checkbox';

export default function render(list) {

    // defining items
    const listContainer = document.querySelector('.list-container');
    listContainer.innerHTML = '';

    // render the text nodes
    list.forEach((element)=>{
        const newTaskDiv = document.createElement('div');
        const newTaskName = document.createElement('p')
        newTaskName.textContent = element.name;
        newTaskDiv.classList.add('taskRow');

        newTaskDiv.appendChild(checkbox(element));
        newTaskDiv.appendChild(newTaskName);
        listContainer.appendChild(newTaskDiv);
    });
};

