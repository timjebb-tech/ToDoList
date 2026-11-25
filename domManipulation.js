export {displayTodoList}

import {doAddTodo} from './todo.js';

import {todoList, currentActiveTask} from './index.js';

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
        console.log(`currentProject = ${currentProject}`);
        if ((todo.project == currentProject) || (currentProject == "all")) {
            displayTodo(todo);
        }
    }
}

function displayTodo(todo) {
    const card = createTaskCard(todo.title, todo.description, todo.dueDate, todo.priority, todo.project)

    container.appendChild(card);
}

function clearTodoListDisplay() {
    container.replaceChildren();
}

const modal = document.getElementById('task-modal');
const closeBtn = document.getElementById('modal-close');

const addSubtaskBtn = document.getElementById('modal-add-subtask--btn');

function createTaskCard(title, description, dueDate, priority, project) {
  // Main card container
  const card = document.createElement('div');
  card.className = 'task-card';

  // Header
  const header = document.createElement('div');
  header.className = 'task-card__header';

  const projectBadge = document.createElement('span');
  projectBadge.className = 'task-card__project';
  projectBadge.textContent = project;

  const priorityBadge = document.createElement('span');
  const priorityLevel = priority.toLowerCase(); // 'high', 'medium', or 'low'
  priorityBadge.className = `task-card__priority task-card__priority--${priorityLevel}`;
  priorityBadge.textContent = priority;

  header.append(projectBadge, priorityBadge);

  // Body
  const cardTitle = document.createElement('h3');
  cardTitle.className = 'task-card__title';
  cardTitle.textContent = title;

  const cardDesc = document.createElement('p');
  cardDesc.className = 'task-card__description';
  cardDesc.textContent = description;

  // Footer
  const footer = document.createElement('div');
  footer.className = 'task-card__footer';

  const dateSpan = document.createElement('span');
  dateSpan.className = 'task-card__due-date';
  dateSpan.textContent = `Due: ${dueDate}`;

  footer.appendChild(dateSpan);

  // Assemble the card
  card.append(header, cardTitle, cardDesc, footer);

  // Open expanded view on click
  card.addEventListener('click', () => openExpandedCard(title, description, dueDate, priority, project));

  return card;
}

function openExpandedCard(title, description, dueDate, priority, project) {
  document.getElementById('modal-project').textContent = project;
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-description').textContent = description;
  document.getElementById('modal-due-date').textContent = dueDate;

  const priorityEl = document.getElementById('modal-priority');
  priorityEl.textContent = priority;
  priorityEl.className = `task-card__priority task-card__priority--${priority.toLowerCase()}`;

  modal.showModal(); // Opens native modal with Escape-key support
  currentActiveTask = title;
}

// Close via button or clicking outside the card
closeBtn.addEventListener('click', () => modal.close());

modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.close();
  });

addSubtaskBtn.addEventListener('click', () => doAddTodo(currentActiveTask));
