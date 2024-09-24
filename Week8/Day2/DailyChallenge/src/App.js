// 1. In the App.js create an array of objects in the state. Each object contains the language and the number of votes per language.
// 2. Create a function that increases the state of the votes by one, when you click on a specific language button.

import { useState } from "react";
import './App.css';

function App() {
  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
  ]);

  const vote = (item) => {
    item.votes++;
    setLanguages([...languages]);
  }
  
  return (
    <div className="App">
      <h1>Vote Your Language!</h1>
      {languages.map((item, index) => {
        return (
          <div className="block" key={index}>
            {item.name} {item.votes}
            <button onClick={() => vote(item)}>Click here!</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
