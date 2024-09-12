const ToDoList = require('./todo.js')

let myList = new ToDoList();
myList.addTask('Complete the task');
myList.addTask('Read a book');
myList.addTask('Cook a dinner');
myList.markTask('Cook a dinner');
myList.listTasks();