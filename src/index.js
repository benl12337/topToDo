// import statements
import './style.css';
import renderTaskList from './renderTaskList.js';
import renderProjectsList from './renderProjectsList.js';
import task from './task.js';
import toDoList from './toDoList.js';
import updateProjectTitle from './updateProjectTitle.js';


// defining consts & variables
let projectsList = {
    list: []
};

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
    // handle logic for duplicate project names
    if ((projectsList.list.map((project) => { return project.name })).indexOf(projectName.value) != -1) {
        projectName.setCustomValidity("Invalid");
        return;
    }

    // get the inputs from the form
    const newProject = new toDoList(projectName.value);
    projectsList.list.push(newProject);

    // update localStorage
    localStorage.setItem("projectsList", JSON.stringify(projectsList));

    // update active Project in localStorage
    activeProject.obj = newProject;
    localStorage.setItem("activeProject", JSON.stringify(activeProject));
    projectDialog.close()
    updateProjectTitle();

    // reset input values
    detailsContainer.innerHTML = '';
    projectName.value = '';
    renderProjectsList(projectsList, activeProject);
    renderTaskList(projectsList, activeProject.obj.list, false);
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

    activeProject = JSON.parse(localStorage.getItem("activeProject"));


    // handle logic for duplicate task name

    const filledTaskInput = document.querySelector('#filledTaskInput');
    const taskDueDate = document.querySelector('#taskDueDate');
    const taskDescription = document.querySelector('#taskDescription');
    e.preventDefault();
    // add new task to project array, and push to the current projects list 
    const newTask = new task(filledTaskInput.value, taskDueDate.value, taskDescription.value);
    activeProject.obj.list.push(newTask);


    // find matching project index and push the active project in
    const projectIndex = (projectsList.list.map((project) => { return project.name })).indexOf(activeProject.obj.name);
    console.log("Where were you");
    projectsList.list[projectIndex].list.push(newTask);


    // add to local storage
    console.log("is it being pushed", projectsList); // the task is not being pushed to the current project
    localStorage.setItem("projectsList", JSON.stringify(projectsList));

    // refresh all modal input values
    input.placeholder = 'Enter task here';
    input.value = '';
    detailsContainer.innerHTML = '';
    taskDueDate.value = '';
    taskDescription.value = '';
    taskDialog.close();
    renderTaskList(projectsList, activeProject.obj.list, true);
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
    projectsList.list.push(mainProject);
    // create the projectsList item and place in localStorage
    localStorage.setItem("projectsList", JSON.stringify(projectsList));

} else {
    // update projectsList to localStorage
    projectsList = JSON.parse(localStorage.getItem("projectsList"));
}



// assigning the current active project to a variable
let activeProject = {
    obj: projectsList.list[0]
}

// assign the activeProject variable, save in localStorage
localStorage.setItem("activeProject", JSON.stringify(activeProject));


projectName.addEventListener('change', () => {
    projectName.setCustomValidity("");
});

document.addEventListener('click', () => {
    localStorage.setItem("projectsList", JSON.stringify(projectsList));
});

updateProjectTitle();
renderProjectsList(projectsList, activeProject);
renderTaskList(projectsList, activeProject.obj.list, false);
