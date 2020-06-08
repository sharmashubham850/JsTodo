// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

// Functions
function addTodo(event) {
    // Prevent deafult behaviour
    event.preventDefault();

    // Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    // New todo Item
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');
    newTodo.innerText = todoInput.value;

    // Completed button
    const completedButton = document.createElement('button');
    completedButton.classList.add('complete-btn');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'

    // Trash button
    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-btn');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'

    // Adding todo_li, cmp_btn, trash_btn to div
    todoDiv.append(newTodo, completedButton, trashButton);

    // Appending new div to todolist div
    todoList.appendChild(todoDiv);

    // Clear Todo Input value
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;

    // DELETE TODO
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;

        // Fall Animation
        todo.classList.add('fall');

        // After animation
        todo.addEventListener('transitionend', function () {
            this.remove();
        })
    }

    // Complete TODO
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
