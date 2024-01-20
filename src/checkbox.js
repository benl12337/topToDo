export default function checkbox(task) {
    const checkbox = document.createElement('div');
    checkbox.classList.add('checkbox');

    // add default render
    if (task.status) {
        checkbox.classList.add('checked');
    }

    // add event listener on click
    checkbox.addEventListener('click', ()=> {
        if (task.status) {
            checkbox.classList.remove('checked');
            task.status = false;
        } else {
            checkbox.classList.add('checked');
            task.status = true;
        }

    });
    return checkbox;
};