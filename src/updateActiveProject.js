import renderProjectsList from "./renderProjectsList";
import renderTaskList from "./renderTaskList";

export default function updateActiveProject(projectsList, activeProject) {
    activeProject.obj = projectsList.list[0];
    console.log("CHIENNNN", activeProject.obj);
    localStorage.setItem("activeProject", JSON.stringify(activeProject));
    renderProjectsList(projectsList, activeProject);
    renderTaskList(projectsList, activeProject.obj.list, false);
};