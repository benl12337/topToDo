export default function exportProjectTitle() {
    const projectTitle = document.querySelector('#projectTitle');
    projectTitle.textContent = JSON.parse(localStorage.getItem("activeProject")).obj.name;
};