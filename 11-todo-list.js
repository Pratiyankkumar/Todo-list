

let todoList = [];

// Check if there are any existing todoList items stored in localStorage
const storedTodoList = localStorage.getItem('todoList');
if (storedTodoList) {
  todoList = JSON.parse(storedTodoList);
}

// Call renderTodoList function to initially render the todo list
renderTodoList();


function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach(function(todoObject, index) {
    const {name,dueDate} = todoObject;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick="
      todoList.splice(${index},1);
      renderTodoList();
      " class="delete-todo-button">Delete</button>
    `;
    todoListHTML+=html
  });

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}
function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  
  todoList.push({
    name,
    dueDate
  });

  inputElement.value = '';

  updateLocalStorage();
  renderTodoList();
  
}
function updateLocalStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}