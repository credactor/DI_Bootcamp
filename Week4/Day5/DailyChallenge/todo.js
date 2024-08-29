let tasks = [];
const form = document.getElementById("form");
const ul = document.getElementById("list-tasks");
const clear = document.getElementById("clear");

form.addEventListener("submit", handleSubmit);
clear.addEventListener("click", clearPage);

function clearPage() {
    tasks = [];
    renderTasks(tasks);
    form.reset();
}

function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(form);
    const task = formData.get("task");
    if (task === '') return;
    tasks.push(task);
    renderTasks(tasks);
    form.reset();
}

function renderTasks(tasks) {
    ul.innerHTML = "";
for (const task of tasks) {
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
}