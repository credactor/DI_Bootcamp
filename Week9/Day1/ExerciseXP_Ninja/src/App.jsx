// Objective: Create a React task management system that allows different components to manage tasks using useContext and useReducer.
//     Set up a new React project using create-react-app or your preferred method.
//     Create a context for managing tasks.
//     Implement a task provider that includes a reducer for managing tasks.
//     Create components for adding tasks, displaying tasks, and removing tasks. These components should use the task context to interact with the task state.
//     Implement actions in the reducer for adding, completing, and removing tasks.
// Hints:
//     Each task can be represented as an object with properties like id, text, and completed.
//     Use a unique id for each task to identify and remove them.

import { useReducer, useRef, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TasksList from './components/TasksList'
export const TaskContext = createContext();

const initialState = { tasks: [] }
const ADD_TASK = "add_task";
export const REMOVE_TASK = "remove_task";
export const COMPLETE_TASK = "complete_task";

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
      </div>
      <div>
        <h2>List of Tasks</h2>
        <TasksList />
      </div>
    </TaskContext.Provider>
  );
}

export default App;