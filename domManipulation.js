export {displayTodoList}
import {todoList} from './index.js';

const container = document.getElementById('todoList');

function displayTodoList() {
    clearTodoListDisplay();
    const currentProjectSelector = document.getElementById('project-selector');
    const currentProject = currentProjectSelector.value;
    console.log(`displayTodoList() : currentProject = ${currentProject}`);
    const items = todoList.getItems();
    console.log(`Displaying ${items.length} items`);
    for (const todo of items) {
        console.log(`displayTodoList() : todo.project = ${todo.project}`);
        if (todo.project == currentProject) {
            displayTodo(todo);
        }
    }
}

function displayTodo(todo) {
    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('h3');
    title.textContent = todo.title;

    const description = document.createElement('p');
    description.textContent = todo.description;

    const dueDate = document.createElement('p');
    dueDate.textContent = todo.dueDate;

    const project = document.createElement('p');
    project.textContent = todo.project;




    console.log("adding card");
    card.append(title, description, dueDate, project);
    container.appendChild(card);
}

function clearTodoListDisplay() {
    container.replaceChildren();
}