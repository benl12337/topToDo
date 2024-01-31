import renderTaskList from './renderTaskList.js';
import deleteProject from './deleteProject.js';
import updateProjectTitle from './updateProjectTitle.js';

export default function renderProjectsList(projectsList, activeProject) {
    // write to localStorage. This is creating a circular reference

    const projectsContainer = document.querySelector('.projects-list');
    const detailsContainer = document.querySelector('.details-container')
    const input = document.getElementById('taskInput');
    projectsContainer.innerHTML = '';

    console.log("parsin active project", JSON.parse(localStorage.getItem("activeProject")));

    projectsList.list.forEach((project) => {
        // do the initial render of the page
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('projectName');
        const textNode = document.createElement('p');
        textNode.textContent = project.name;
        projectDiv.appendChild(textNode);
        const deleteBtn = deleteProject(projectsList, activeProject.obj, project, projectDiv);
        projectDiv.appendChild(deleteBtn);
        projectsContainer.appendChild(projectDiv);
        projectDiv.dataset.name = project.name;

        textNode.addEventListener('click', () => {
            // clear input
            input.value = '';
            detailsContainer.innerHTML = '';
            input.placeholder = 'Enter task here';

            // change active status
            activeProject.obj = project;
            // write activeProject to localStorage
            localStorage.setItem("activeProject", JSON.stringify(activeProject));
            projectDiv.classList.toggle('activeProject');
            renderProjectsList(projectsList, activeProject);

            // re-render tasks for active project
            renderTaskList(projectsList, activeProject.obj.list, false);
            updateProjectTitle();
        });


        if (project.name == activeProject.obj.name) {    
            projectDiv.classList.add('activeProject');
            deleteBtn.classList.toggle('trashToggle');
        }
    });
};