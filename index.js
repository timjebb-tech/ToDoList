import {doAddTodo, doAddProject} from './todo.js';
import {createTodoList} from './todoList.js';
import {displayTodoList} from './domManipulation.js'

export {todoList, projects, updateProjectSelector, currentActiveTask}

let projects = ["All", "General"];
let currentActiveTask = null;

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
    displayTodoList();
});

updateProjectSelector();