import renderProjectsList from './renderProjectsList.js';
import renderTaskList from './renderTaskList.js';


export default function deleteProject(projectsList, activeProject, project, projectDiv) {

    const deleteButton = document.createElement('div');
    deleteButton.textContent = "delete";

    deleteButton.addEventListener('click', () => {
        const index = projectsList.indexOf(project);
        projectsList.splice(index, 1);

        // write to localStorage
        localStorage.setItem("projectsList", JSON.stringify(projectsList));

        activeProject = projectsList[0];
        console.log(projectsList, "active project is: ", activeProject.projectName);
        renderProjectsList(projectsList, activeProject);
        renderTaskList(projectsList, activeProject.list, false);
    });

    return deleteButton;
};