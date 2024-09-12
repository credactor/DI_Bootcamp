// Exercise 4: Todo List using ES6 module syntax
// 1. Create a directory named todoApp.
// 2. Inside the todoApp directory, create two files: todo.js and app.js.
// 3. In todo.js, define an ES6 module that exports a TodoList class.
// 4. The TodoList class should have methods to add tasks, mark tasks as complete, and list all tasks.
// 5. Export the TodoList class.
// 6. In app.js, import the TodoList class from the todo.js module.
// 7. Create an instance of the TodoList class.
// 8. Add a few tasks, mark some as complete, and list all tasks.
// 9. Run app.js and verify that the todo list operations are working correctly.

class TodoList {
    constructor() {
      this.allTasks = [];
    }
  
    addTask(content) {
      this.allTasks.push({
        task: content,
        completed: false,
      });
    }
  
    markTask(content) {
      for (let item of this.allTasks){
        if (item.task === content) {
            item.completed = true;
        }
      }
    }
  
    listTasks() {
      console.log(this.allTasks);
    }
  }

module.exports = TodoList;