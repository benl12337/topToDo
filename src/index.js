// import statements
import './style.css';
import renderTaskList from './renderTaskList.js';
import renderTaskDetails from './renderTaskDetails.js';
import task from './task.js';
import toDoList from './toDoList.js';

// defining consts & variables
const projectsList = [];
const mainProject = new toDoList("Main Project");
const sideProject = new toDoList("Side Project");
projectsList.push(mainProject);
projectsList.push(sideProject);

// getting document elements
let activeProject = mainProject;
const input = document.getElementById('taskInput');
const dateInput = document.getElementById('dateInput');
input.placeholder = 'Enter task here'
const projectsContainer = document.querySelector('.projects-list');
const addProjectBtn = document.querySelector('#addProject button');
const listContainer = document.querySelector('.list-container');
const detailsContainer = document.querySelector('.details-container');


// this page should handle the logic for switching projects
// projects pane logic here. get the active project
function renderProjectsList() {
    projectsContainer.innerHTML = '';
    projectsList.forEach((project) => {
        // do the initial render of the page
        const projectDiv = document.createElement('div');

        if (project == activeProject) {
            projectDiv.classList.add('activeProject');
        }

        projectDiv.classList.add('projectName');
        const textNode = document.createElement('p');
        textNode.textContent = project.name;
        projectDiv.appendChild(textNode);
        projectsContainer.appendChild(projectDiv);

        projectDiv.addEventListener('click', () => {
            // clear input
            input.value = '';
            dateInput.value = '';
            detailsContainer.innerHTML = '';
            input.placeholder = 'Enter task here';

            // change active status
            activeProject = project;
            projectDiv.classList.toggle('activeProject');

            // logic to add black background
            renderProjectsList()

            // re-render tasks
            renderTaskList(project.getList());
        });
    });
}

// add button listener
addProjectBtn.addEventListener('click', ()=> {
    const test = prompt("Project Name:");

    // this should be switched to a modal dialogue

    // create a new project object
    const newProject = new toDoList(test);
    projectsList.push(newProject);
    activeProject = newProject;
    renderProjectsList();
    renderTaskList(activeProject.getList());
});


// handling the logic for inputting tasks
document.addEventListener('keypress', (event) => {
    if (event.key == 'Enter' && input.value != '' && dateInput.value != '') {
        const newTask = new task(input.value, dateInput.value);
        activeProject.addTask(newTask);
        input.value = '';
        dateInput.value = '';
        input.placeholder = 'Enter task here';
        //mainProject.logTasks();
        renderTaskList(activeProject.getList());
    }
});

renderProjectsList();

