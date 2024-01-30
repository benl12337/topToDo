import renderProjectsList from './renderProjectsList.js';
import renderTaskList from './renderTaskList.js';
import trashCan from './trash-can.png';

// attribute https://www.flaticon.com/authors/tanah-basah

export default function deleteProject(projectsList, activeProject, project, projectDiv) {

    const deleteButton = document.createElement('div');
    const trashCanBtn = new Image();
    trashCanBtn.src = trashCan;
    trashCanBtn.classList.add('trashCan');
    deleteButton.appendChild(trashCanBtn);

    deleteButton.addEventListener('click', () => {
        const index = projectsList.indexOf(project);
        
        // if current project is being deleted, 


        projectsList.splice(index, 1);

        // write to localStorage. This is creating a circular reference
        localStorage.setItem("projectsList", JSON.stringify(projectsList));

        activeProject.obj = projectsList[0];
        console.log(projectsList, "active project is: ", activeProject.projectName);
        renderProjectsList(projectsList, activeProject);
        renderTaskList(projectsList, activeProject.obj.list, false);
        trashCanBtn.classList.toggle('trashToggle');
    });

    return deleteButton;
};