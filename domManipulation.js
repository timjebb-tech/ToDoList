export {displayTodoList}
import {todoList} from './index.js';

const container = document.getElementById('todoList');

function displayTodoList() {
    clearTodoListDisplay();
    const items = todoList.getItems();
    console.log(`Displaying ${items.length} items`);
    for (const todo of items) {
        displayTodo(todo);
    }
}

function displayTodo(todo) {
    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('h3');
    title.textContent = todo.title;

    const details = document.createElement('p');
    details.textContent = todo.description;

    console.log("adding card");
    card.append(title, details);
    container.appendChild(card);
}

function clearTodoListDisplay() {
    container.replaceChildren();
}