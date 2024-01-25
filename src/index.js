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

// assigning the current active project to a variable
let activeProject = mainProject;


// querying document elements
const input = document.getElementById('taskInput');
input.placeholder = 'Enter task here'
const projectsContainer = document.querySelector('.projects-list');
const addProjectBtn = document.querySelector('#addProject button');
const listContainer = document.querySelector('.list-container');
const detailsContainer = document.querySelector('.details-container');
const projectName = document.querySelector('#projectName');
const projectDialog = document.querySelector('#projectDialog');
const projectForm = document.querySelector('#projectForm');
const taskDialog = document.querySelector('#taskDialog');
const taskForm = document.querySelector('#taskForm');


// projects pane logic here. get the active project and render it on the page
function renderProjectsList() {
    projectsContainer.innerHTML = '';
    projectsList.forEach((project) => {

        // do the initial render of the page
        const projectDiv = document.createElement('div');

        projectDiv.classList.add('projectName');
        const textNode = document.createElement('p');
        textNode.textContent = project.name;
        projectDiv.appendChild(textNode);
        projectsContainer.appendChild(projectDiv);

        projectDiv.addEventListener('click', () => {
            // clear input
            input.value = '';
            detailsContainer.innerHTML = '';
            input.placeholder = 'Enter task here';

            // change active status
            activeProject = project;
            projectDiv.classList.toggle('activeProject');

            renderProjectsList()

            // re-render tasks for active project
            renderTaskList(project.getList(), false);
        });

        if (project == activeProject) {
            projectDiv.classList.add('activeProject');
        }
    });
}

// show modal upon clicking the add project button
addProjectBtn.addEventListener('click', () => {
    projectDialog.showModal();
});

projectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get the inputs from the form
    const newProject = new toDoList(projectName.value);
    projectsList.push(newProject);
    activeProject = newProject;
    projectDialog.close()

    // reset input values
    projectName.value = '';

    renderProjectsList();
    renderTaskList(activeProject.getList());
});


// handling the logic for inputting tasks
document.addEventListener('keypress', (event) => {
    if (event.key == 'Enter' && input.value != '') {
        // Open modal dialog
        const modalTaskName = document.querySelector('#filledTaskInput');

        // pre-fill task name
        modalTaskName.value = input.value;
        taskDialog.showModal();
    }
});

// add the task to project upon submission of the form
taskForm.addEventListener('submit', (e) => {
    const taskDueDate = document.querySelector('#taskDueDate');
    const taskDescription = document.querySelector('#taskDescription');
    e.preventDefault();

    // add new task to project array
    const newTask = new task(input.value, new Date(taskDueDate.value), taskDescription.value);
    activeProject.addTask(newTask);

    // refresh all modal input values
    input.placeholder = 'Enter task here';
    input.value = '';
    taskDueDate.value = '';
    taskDescription.value = '';
    taskDialog.close();
    renderTaskList(activeProject.getList(), true);
});


// close modal when cancelling task add
document.querySelector('#cancelTask').addEventListener('click', () => {
    taskDueDate.value = '';
    taskDescription.value = '';
    taskDialog.close();
});

// close modal when cancelling project add
document.querySelector('#cancelProject').addEventListener('click', () => {
    projectName.value = '';
    projectDialog.close();
});


// first function to be called on the page
renderProjectsList();

