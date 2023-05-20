document.getElementById('add-btn').addEventListener('click', function () {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value;
    todoInput.value = '';
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.innerHTML = 
        `<div class="todo-text">${todoText}</div>
        <div>
            <input type="checkbox" class="complete-btn">
            <button class="delete-btn">X</button>
        </div>`;
    document.getElementById('todo-list').appendChild(todoItem);

    todoItem.querySelector('.complete-btn').addEventListener('change', function (e) {
        if (e.target.checked) {
            todoItem.classList.add('completed');
        } else {
            todoItem.classList.remove('completed');
        }
    });

    todoItem.querySelector('.delete-btn').addEventListener('click', function () {
        document.getElementById('todo-list').removeChild(todoItem);
    });
});
