
let listTodo = [];
 

function addTask(item) {
    const task = {
        id: Date.now(),
        name: item,
        completed: false
    };
    listTodo.push(task);
    storageTasks(listTodo);
    document.getElementById("input-task").value = "";
    console.log(listTodo);
}

function getTasks() {
    const itemsFromJson = localStorage.getItem("todo-test") || "[]";
    return JSON.parse(itemsFromJson)
}

function storageTasks(items) {
    let itemsToJson = JSON.stringify(listTodo);
    localStorage.setItem("todo-test", itemsToJson);

}

function renderTodos(todos) {
    todoItemsList.innerHTML = '';

    todos.forEach(function(item) {
        const checked = item.completed ? 'checked': null;
        const li = document.createElement('li');

        li.setAttribute('class', 'item');

        li.setAttribute('data-key', item.id);

        if (item.completed === true) {
            li.classList.add('checked');
        }
        li.innerHTML = `
            <input type="checkbox" class="checkbox" ${checked}>
            ${item.name}
            <button class="delete-button"><i class="fas fa-trash fa-2x" id = "trash"></i></button>
            `;

        todoItemsList.append(li);
    });
}