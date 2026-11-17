export {createTodo, doAddTodo}
import {todoList} from './index.js';
import {displayTodoList} from './domManipulation.js'

// const canFly = () => ({
//   fly: () => console.log("Flying into the sky!")
// });

const createTodo  = ({title, description, dueDate, priority}) => {
  const contents = { title, description, dueDate, priority };
  console.log("createTodo(): contents =", contents);
  
  // Combine state and behaviours into a single new object
  return Object.assign(
    {},
    contents,
  );

    
}

// 1. Opens the modal and triggers your callback when the user clicks Save
function openTodoModal(onConfirm) {
  const dialog = document.getElementById('taskDialog');
  const form = document.getElementById('taskForm');

  form.reset();
  dialog.showModal();

  // Listen once for the modal closing
  dialog.addEventListener('close', () => {
    if (dialog.returnValue === 'confirm') {
      const taskData = Object.fromEntries(new FormData(form).entries());
      // Send the data back to the caller's callback function
      onConfirm(taskData);
    }
  }, { once: true });
}

// 2. Your calling function passes a callback to receive the data
function doAddTodo() {
  openTodoModal((taskData) => {
    // This block runs after the user submits the modal
    const newTodo = createTodo({
      title: taskData.title,
      description: taskData.description,
      dueDate: taskData.dueDate,
      priority: taskData.priority
    });

    todoList.add(newTodo);
    console.table(todoList.getItems());

    displayTodoList();
  });
}
