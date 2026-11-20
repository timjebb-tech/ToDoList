import {doAddTodo, doAddProject} from './todo.js';
import {createTodoList} from './todoList.js';

export {todoList, projects}

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