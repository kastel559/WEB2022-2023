
var listTodo = [];

const todoItemsList = document.querySelector('#taskUL');
const inputValue = document.getElementById('input-task');

function newTask() {
    if(inputValue.value === '') alert("New Task");
    else addTask(inputValue.value);
}

function addTask(item) {
    const task = {
        id: Date.now(),
        name: item,
        completed: false
    };
    listTodo.push(task);
    document.getElementById("input-task").value = "";
    console.log(listTodo);
    renderTodo();
}

function renderTodo() {
    todoItemsList.innerHTML = '';

    listTodo.forEach(function(item){
        const checked = item.complete ? 'checked' : null;
        var li = document.createElement("li");
        li.setAttribute('class', 'item');
        li.setAttribute('id', item.id);


        if (item.complete){
            li.classList.add('checked');
        }
        li.innerHTML = `
            <input type ="checkbox" class='tick' ${checked}>
            <p>${item.name}</p>
            <button class='delete'><i class="fas fa-trash fa-1.5x" id = "trash-icon"></i></button>
        `
        todoItemsList.append(li);
    });
}
todoItemsList.addEventListener('click', function(event) {
    if (event.target.type === 'checkbox'){
        toggle(event.target.parentElement.getAttribute('id'));
    }

    if (event.target.classList.contains('delete')){
        deleteTask(event.target.parentElement.getAttribute('id'));
    }
});
function toggle(id) {
    listTodo.forEach(function(item) {
        if(item.id == id) {
            item.completed = !item.completed;
        }
    });
    renderTodo();
}
function deleteTask(id) {
    listTodo = listTodo.filter(function(item) {
        return item.id != id;
    });
    renderTodo();
}
