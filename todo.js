export {createTodo, doAddTodo, doAddProject}
import {todoList, projects, updateProjectSelector} from './index.js';
import {displayTodoList} from './domManipulation.js'

// const canFly = () => ({
//   fly: () => console.log("Flying into the sky!")
// });

const createTodo  = ({title, description, dueDate, priority, project='General'}) => {
  const contents = { title, description, dueDate, priority, project };
  console.log("createTodo(): contents =", contents);
  
  // Combine state and behaviours into a single new object
  return Object.assign(
    {},
    contents,
  );

    
}



// 2. Your calling function passes a callback to receive the data
function doAddTodo() {
  
    openTodoModal((taskData) => {
    // This block runs after the user submits the modal

    console.log(`taskData['due-date'] = ${taskData['due-date']} `);
    console.table(taskData);

    const newTodo = createTodo({
      title: taskData.title,
      description: taskData.description,
      dueDate: taskData['due-date'],
      priority: taskData.priority,
      project:taskData.project
    });

    todoList.add(newTodo);
    console.table(todoList.getItems());

    displayTodoList();
  });

}

// 1. Opens the modal and triggers your callback when the user clicks Save
function openTodoModal(onConfirmCallback) {
    const dialog = document.getElementById('taskDialog');
    const form = document.getElementById('taskForm');

    const dropdown = document.getElementById('project');
    dropdown.options.length = 0;

    projects.forEach((project) => {
        const option = document.createElement('option');
        option.value = project.toLowerCase();
        option.textContent = project;
        dropdown.append(option);
    });

  form.reset();
  dialog.showModal();

  // Listen once for the modal closing
  dialog.addEventListener('close', () => {
    if (dialog.returnValue === 'confirm') {
      const taskData = Object.fromEntries(new FormData(form).entries());
      // Send the data back to the caller's callback function
      onConfirmCallback(taskData);
    }
  }, { once: true });
}

function openProjectsModal(onConfirmCallback) {
    const dialog = document.getElementById('projectsDialog');
    const form = document.getElementById('projectsForm');
    form.reset();
    dialog.showModal();

    // Listen once for the modal closing
    dialog.addEventListener('close', () => {
        if (dialog.returnValue === 'confirm') {
            const projectData = Object.fromEntries(new FormData(form).entries());
            onConfirmCallback(projectData);
        }
    }, { once: true });
}

function doAddProject() {
    openProjectsModal((projectData) => {
    // This block runs after the user submits the modal
    if (!projects.includes(projectData.projectName))    {
        console.log(`Adding ${projectData.projectName} to list of projects`);
        projects.push(projectData.projectName);
        updateProjectSelector();
    }
    else  { 
        alert(`Project ${projectData.projectName} already exists`)
    }
  });
}

