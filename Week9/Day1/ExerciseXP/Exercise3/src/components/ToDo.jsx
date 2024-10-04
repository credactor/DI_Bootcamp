import React, { useState, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialState = { tasks: [] }
const ADD_TASK = "add_task";
const REMOVE_TASK = "remove_task";

const taskReducer = (state, action) => {
  if (action.type === ADD_TASK) {
    const newTasks = [...state.tasks];
    newTasks.push({ id: uuidv4(), text: action.text});
    return {...state, tasks: newTasks};
  }
  else if (action.type === REMOVE_TASK) {
    const notDeletedTasks = state.tasks.filter(item => item.id !== action.id);
    return { ...state, tasks: notDeletedTasks };
  }
  return state;
}

const ToDo = () => {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const [inputRef, setInput] = useState("");

  const addTask = () => { //change the state
    dispatch({ type: ADD_TASK, text: inputRef});
    setInput("");
  }

  const removeTask = (id) => {
        dispatch({ type: REMOVE_TASK, id });
    }

  return (
    <>
      <h1>Task Manager</h1>
      <div>
        <input type="text" placeholder="Add Task..." value = {inputRef}
        onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => addTask()}>Add</button>
      </div>
      <div>
        <h2>List of Tasks</h2>
        {state.tasks.map((item) => { return (
                        <div key={item.id} style={{textAlign:"left"}}>
                            <button onClick={() => removeTask(item.id)}> X </button>
                            {item.text}
                        </div>
                    );
                })}
      </div>
    </>
  );
}

export default ToDo;