import renderTaskList from "./renderTaskList";

export default function checkbox(projectsList, list, task, textNode, dateNode) {
    const checkbox = document.createElement('div');
    checkbox.classList.add('checkbox');

    // add default render
    if (task.status) {
        checkbox.classList.add('checked');
    }

    // add event listener on click. Change task completion status if clicked
    checkbox.addEventListener('click', () => {
        task.status = task.status ? false : true;
        checkbox.classList.toggle('checked');
        textNode.classList.toggle('strike');
        dateNode.classList.toggle('hidden');
        renderTaskList(projectsList, list, false);

        // write the updated status to localStorage
        localStorage.setItem("projectsList", JSON.stringify(projectsList));
    });
    return checkbox;
};