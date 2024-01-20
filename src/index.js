// import statements
import './style.css';
import render from './render.js';
import task from './task.js';
import toDoList from './toDoList.js';

// defining consts & variables
const input = document.getElementById('taskInput');
const mainProject = new toDoList();

// this page should handle the logic for switching projects
document.addEventListener('keypress', (event)=> {
    if (event.key == 'Enter' && input.value != '') {
        const newTask = new task(input.value);
        mainProject.addTask(newTask);
        input.value = '';
        //mainProject.logTasks();
        render(mainProject.getList());
    }
});

