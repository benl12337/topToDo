import './style.css';
import renderTaskDetails from './renderTaskDetails.js';
import taskName from './taskName.js';
import checkbox from './checkbox.js';
import { formatDistance }from "date-fns";


export default function renderTaskList(list, fade) {

    // defining items
    const listContainer = document.querySelector('.list-container');
    listContainer.innerHTML = '';

    // render the text nodes
    list.forEach((element) => {

        const newTaskDiv = document.createElement('div');
        newTaskDiv.classList.add('taskRow');

        const textNode = taskName(element);
        const dateNode = document.createElement('p');

        let dateDiff = (new Date()).getTime() - element.date.getTime();
        dateDiff = -(dateDiff / (1000 * 60 * 60 * 24));
        // round the date
        dateDiff = Math.ceil(dateDiff);

    
        
        // format the date so it can be appended to the row task
        if (dateDiff < 0) {
            dateNode.textContent = `Due ${-dateDiff} day(s) ago`;
        } else if (dateDiff == 0) {
            dateNode.textContent = "Due today";
        } else {
            dateNode.textContent = `Due in ${dateDiff} day(s)`;
        }
        
        
        console.log("due in", dateDiff);


        newTaskDiv.appendChild(checkbox(element, textNode));
        newTaskDiv.appendChild(textNode);
        newTaskDiv.appendChild(dateNode);


        if (list[list.length - 1].name == element.name && fade) {
            newTaskDiv.classList.add('taskFade');
        }

        listContainer.appendChild(newTaskDiv);
        newTaskDiv.addEventListener('click', () => {
            renderTaskDetails(element);
        });
    });
};

