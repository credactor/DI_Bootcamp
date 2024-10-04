// Objective: Create a React task management system that allows different components to manage tasks using useContext and useReducer.
//     Set up a new React project using create-react-app or your preferred method.
//     Create a context for managing tasks.
//     Implement a task provider that includes a reducer for managing tasks.
//     Create components for adding tasks, displaying tasks, and removing tasks. These components should use the task context to interact with the task state.
//     Implement actions in the reducer for adding, completing, and removing tasks.
// Hints:
//     Each task can be represented as an object with properties like id, text, and completed.
//     Use a unique id for each task to identify and remove them.

// Objective: Enhance the Task Manager application by adding new features, including the ability to edit tasks and filter tasks by completion status, using useContext, useReducer, and useRef.
//     Set up a new React project using create-react-app or your preferred method.
//     Extend the existing Task Manager application (from the previous exercise) by adding the following features:
//     Edit Tasks: Allow users to edit existing tasks by clicking on them.
//     Filter Tasks: Implement buttons to filter tasks by completion status (e.g., show all, show completed, show active).
//     Use useRef to enable task editing and update the task text when the user makes changes.
//     Implement actions in the reducer for editing tasks and filtering tasks.
// Hints:
//     To enable task editing, you can add an “Edit” button next to each task that, when clicked, activates an input field for editing the task text.
//     Use a state variable or a ref to track the edited task text before saving.
//     Implement actions like EDIT_TASK and FILTER_TASKS in the reducer to handle task editing and filtering.
//     Use conditional rendering to display tasks based on the selected filter.

import { useReducer, useRef, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TasksList from './components/TasksList'
export const TaskContext = createContext();

const initialState = { tasks: [] }
const ADD_TASK = "add_task";
export const REMOVE_TASK = "remove_task";
export const COMPLETE_TASK = "complete_task";
export const FILTER_TASKS = "filter_tasks";
export const EDIT_TASK = "edit_task";
export const TOGGLE_EDIT = "toggle_edit";

const taskReducer = (state, action) => {
  if (action.type === ADD_TASK) {
    const newTasks = [...state.tasks];
    newTasks.push({ id: uuidv4(), text: action.payload, completed: false });
    return {...state, tasks: newTasks};
  }
  else if (action.type === REMOVE_TASK) {
    const notDeletedTasks = state.tasks.filter(item => item.id !== action.id);
    return { ...state, tasks: notDeletedTasks };
  }
  else if (action.type === COMPLETE_TASK) {    
    return { ...state, tasks: state.tasks.map((task) =>
      task.id === action.id ? { ...task, completed: !task.completed } : task) };
  }
  else if (action.type === FILTER_TASKS) {    
    return { ...state, filter: action.filter };
  }
  else if (action.type === EDIT_TASK) {    
    return { ...state, tasks: state.tasks.map((task) =>
          task.id === action.id ? { ...task, text: action.newText, isEditing: false } : task) };
  }
  else if (action.type === TOGGLE_EDIT) {    
    return { ...state, tasks: state.tasks.map((task) =>
          task.id === action.id ? { ...task, isEditing: !task.isEditing } : task) };
  }
  return state;
}

function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const inputRef = useRef();

  const addTask = () => { //change the state
    const value = inputRef.current.value;
    dispatch({ type:ADD_TASK, payload:value});
    inputRef.current.value = "";
  }

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      <h1>Task Manager</h1>
      <div>
        <input placeholder="Add Task..." ref = {inputRef} />
        <button onClick={() => addTask()}>Add</button>
      </div><br/>
      <div>
      <button onClick={() => dispatch({ type: FILTER_TASKS, filter: "all" })}>
        Show All
      </button>
      <button onClick={() => dispatch({ type: FILTER_TASKS, filter: "active" })}>
        Show Active
      </button>
      <button onClick={() => dispatch({ type: FILTER_TASKS, filter: "completed" })}>
        Show Completed
      </button>
    </div>
      <div>
        <h2>List of Tasks</h2>
        <TasksList />
      </div>
    </TaskContext.Provider>
  );
}

export default App;