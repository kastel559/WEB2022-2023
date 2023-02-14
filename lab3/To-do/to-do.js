
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
    renderTodo();
}

function renderTodo() {
    todoItemsList.innerHTML = '';

    listTodo.forEach(function(item) {
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
function toggle(id) {
    listTodo.forEach(function(item) {
        if(item.id == id) {
            item.completed = !item.completed;
        }
    });
}
function deleteTask(id) {
    listTodo = listTodo.filter(function(item) {
        return item.id != id;
    });
    renderTodo();
}