let tasks = [];
const form = document.getElementById("form");
const ul = document.getElementById("list-tasks");
const clear = document.getElementById("clear");

form.addEventListener("submit", handleSubmit);
clear.addEventListener("click", clearPage);
ul.addEventListener("change", crossOut);
ul.addEventListener("click", deleteTask);

function clearPage() {
    tasks = [];
    ul.innerHTML = '';
    form.reset();
}

function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const task = formData.get("task");
    if (task === '') return;
    tasks.push(task);
    addTask(task);
    form.reset();
}

function addTask(task) {
    const li = document.createElement("li");    
    const xMark = document.createElement("i");
    xMark.classList.add("fa-solid", "fa-xmark");
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    const span = document.createElement("span");
    span.innerText = task;
    li.append(xMark, checkbox, span);
    ul.append(li);
}

function crossOut(e) {
    if (e.target.type === "checkbox") {
        const li = e.target.parentElement;        
        if (e.target.checked) {
            li.lastChild.classList.add("crossed");
        }
        else {
            li.lastChild.classList.remove("crossed");
        }
    }
}

function deleteTask(e) {
    if (e.target.classList.contains("fa-xmark")) {
        const li = e.target.parentElement;
        let index = Array.prototype.indexOf.call(ul.children, li);        
        ul.removeChild(li);
        tasks.splice(index, 1);
    }
}