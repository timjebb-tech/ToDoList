export {createTodoList}


// Collection Factory
function createTodoList() {
  // The collection's internal state
  const state = {
    items: [] 
  };

  // Compose the collection object
  return Object.assign(
    {},
    canManageItems(state),
  );
}


// Collection Behaviors
const canManageItems = (state) => ({
  add: (todo) => {
    state.items.push(todo);
    console.log(`added ${todo.title} to the list`);
  },
  getTaskNames: () => state.items.map(todo => todo.name),
  getItems() {
    // Returns a shallow copy so outside code can't accidentally mutate state.items
    return [...state.items];
  }
});


