import {doAddTodo, doAddProject} from './todo.js';
import {createTodoList} from './todoList.js';

export {todoList, projects, updateProjectSelector}

let projects = ["General"];

const addTodoBtn = document.getElementById('add-todo');
const todoList = createTodoList()

const addProjectBtn = document.getElementById('add-project');


addTodoBtn.addEventListener('click', () => {

    doAddTodo();
});

addProjectBtn.addEventListener('click', () => {
    doAddProject();
});



function updateProjectSelector() {
    const dropdown = document.getElementById('project-selector');
    dropdown.options.length = 0;
    projects.forEach((project) => {     
        console.log(`updateProjectSelector():  ${project}`);
        const option = document.createElement('option');
        option.value = project.toLowerCase();
        option.textContent = project;
        dropdown.append(option);
    });
}

const dropdown = document.getElementById("project-selector");

dropdown.addEventListener("change", function(event) {
    const selectedValue = event.target.value;
    displayProjects(selectedValue);
});

updateProjectSelector();