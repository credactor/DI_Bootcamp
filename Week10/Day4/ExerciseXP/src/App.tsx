// Set up a new React project with TypeScript using Vite.
// Demonstrate how to use Vite to create the project and include the necessary TypeScript dependencies.
// Create a simple React component called Greeting that accepts a name prop (a string)
// and displays a greeting message using that prop.
// Create a functional React component that uses the useState hook to manage a counter.
// The component should display the current count and have buttons to increment and decrement the count.
// Create a React component called UserCard that accepts optional props name and age and displays them in a card.
// If the props are not provided, the component should display a default message.
// Create a functional React component that uses the useEffect hook to fetch data from an API when the component mounts. Display the fetched data in the component.

// import { useState } from 'react'
import './App.css'
import Greeting from "./components/Greeting";
import Counter from "./components/Counter"
import UserCard from './components/UserCard';
import UserAPI from './components/UserAPI';

function App() {

  return (
    <>
      <Greeting {...{name: "John"}}/>
      <Counter />
      <UserCard {...{name: "Jane", age: 33}}/>
      <UserCard {...{}}/>
      <UserAPI />
    </>
  )
}

export default App;
