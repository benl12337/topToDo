import renderProjectsList from './renderProjectsList.js';
import renderTaskList from './renderTaskList.js';
import updateActiveProject from './updateActiveProject';
import trashCan from './trash-can.png';
import updateProjectTitle from './updateProjectTitle.js';

// attribute https://www.flaticon.com/authors/tanah-basah

export default function deleteProject(projectsList, activeProject, project, projectDiv) {

    const deleteButton = document.createElement('div');
    const trashCanBtn = new Image();
    trashCanBtn.src = trashCan;
    trashCanBtn.classList.add('trashCan');
    deleteButton.appendChild(trashCanBtn);

    deleteButton.addEventListener('click', () => {
        const index = projectsList.list.indexOf(project);
        projectsList.list.splice(index, 1);
        updateActiveProject(projectsList, activeProject);
        trashCanBtn.classList.toggle('trashToggle');
        updateProjectTitle();
    });

    return deleteButton;
};