// Objective: Create a React component that allows users to add and remove todo items using useReducer.
//     Set up a new React project using create-react-app or your preferred method.
//     Create a component that includes an input field for adding todos, a list to display todos, and a way to remove todos.
//     Use the useReducer hook to manage the state of the todo list.
//     Implement actions for adding and removing todos in your reducer.
// Hints:
//     You can represent each todo as an object with properties like id and text.
//     Use a unique id for each todo to identify them when removing.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToDo from './components/ToDo'
import './App.css'

function App() {

  return (
    <ToDo/>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

export default App;