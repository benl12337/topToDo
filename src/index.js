// import statements
import './style.css';
import renderTaskList from './renderTaskList.js';
import renderProjectsList from './renderProjectsList.js';
import task from './task.js';
import toDoList from './toDoList.js';


// defining consts & variables
let projectsList = [];
// assigning the current active project to a variable
let activeProject;

// querying document elements
const input = document.getElementById('taskInput');
input.placeholder = 'Enter task here';
const addProjectBtn = document.querySelector('#addProject button');
const listContainer = document.querySelector('.list-container');
const projectName = document.querySelector('#projectName');
const projectDialog = document.querySelector('#projectDialog');
const projectForm = document.querySelector('#projectForm');
const taskDialog = document.querySelector('#taskDialog');
const taskForm = document.querySelector('#taskForm');
const detailsContainer = document.querySelector('.details-container');


// show modal upon clicking the add project button
addProjectBtn.addEventListener('click', () => {
    projectDialog.showModal();
});

// add a project to projects list upon submission of form
projectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get the inputs from the form
    const newProject = new toDoList(projectName.value);
    projectsList.push(newProject);

    // update localStorage
    localStorage.setItem("projectsList", JSON.stringify(projectsList));
    activeProject = newProject;
    projectDialog.close()

    // reset input values
    detailsContainer.innerHTML = '';
    projectName.value = '';
    renderProjectsList(projectsList, activeProject);

    renderTaskList(projectsList, activeProject.list, false);
});


// handling the logic for inputting tasks
input.addEventListener('keypress', (event) => {
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
    
    const filledTaskInput = document.querySelector('#filledTaskInput');
    const taskDueDate = document.querySelector('#taskDueDate');
    const taskDescription = document.querySelector('#taskDescription');
    e.preventDefault();
    // add new task to project array, and push to the current projects list 
    const newTask = new task(filledTaskInput.value, new Date(taskDueDate.value), taskDescription.value);
    activeProject.list.push(newTask);


    // add to local storage
    localStorage.setItem("projectsList", JSON.stringify(projectsList));

    // refresh all modal input values
    input.placeholder = 'Enter task here';
    input.value = '';
    detailsContainer.innerHTML = '';
    taskDueDate.value = '';
    taskDescription.value = '';
    taskDialog.close();
    renderTaskList(projectsList, activeProject.list, true);
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

// check if projectsList exists. If not, create a new objects in localStorage
if (!localStorage.getItem("projectsList")) {
    const mainProject = new toDoList("Main Project");
    projectsList.push(mainProject);
    // create the projectsList item and place in localStorage
    localStorage.setItem("projectsList", JSON.stringify(projectsList));

} else {
    // update projectsList to localStorage
    projectsList = JSON.parse(localStorage.getItem("projectsList"));
    
}

activeProject = projectsList[0];
renderProjectsList(projectsList, projectsList[0]);
renderTaskList(projectsList, activeProject.list, false);




