import {doAddTodo} from './todo.js';
import {createTodoList} from './todoList.js';

export {todoList}


const addTodoBtn = document.getElementById('add-todo');
const todoList = createTodoList()

addTodoBtn.addEventListener('click', () => {

    doAddTodo();
});