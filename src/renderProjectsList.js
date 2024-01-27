import renderTaskList from './renderTaskList.js';

export default function renderProjectsList(projectsList, activeProject) {
    const projectsContainer = document.querySelector('.projects-list');
    const detailsContainer = document.querySelector('.details-container')
    const input = document.getElementById('taskInput');
    console.log("successful!!", activeProject.list);
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
            console.log("active project:", activeProject.name);
            projectDiv.classList.toggle('activeProject');
            console.log(activeProject);
            renderProjectsList(projectsList, activeProject);

            // re-render tasks for active project
            renderTaskList(projectsList, activeProject.list, false);
        });

        if (project.name == activeProject.name) {
            projectDiv.classList.add('activeProject');
        }
    });
};