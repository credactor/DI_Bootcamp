// Exercise 1: with JSX
// 1. In the App.js file, display a “Hello World!” message in a paragraph. 
// 2. Create a constant variable with JSX const myelement = <h1>I Love JSX!</h1>;, and render it on the page. 
// 3. Create a constant variable named sum, which value is 5 + 5. Render on the page, the following sentence "React is <sum> times better with JSX" 

// Exercise 2 : Object
// Using the following object: const user
// 1. In the App.js file, render the first name and the last name of the user in two <h3>. 
// 2. In a separate Javascript file named UserFavoriteAnimals.js, create a new Class Component called UserFavoriteAnimals. Use props to pass the favAnimals array to the UserFavoriteAnimals component. 
// 3. In the UserFavoriteAnimals component, use the map method to create <li> tags in a <ul> tag. 
// Each <li> corresponds to one animal from the favAnimals array. 
// Display the <li> tags. Tip : You can use the second parameter of the map function as a key to uniquely identify each HTML item 

// Exercise 3 : HTML Tags in React
// PART I:
// 1. In a separate Javascript file, named Exercise3.js, create a new Class Component called Exercise that contains some HTML tags. 
// create a <h1> tag and set its color to red, and the background color to lightblue. 
// create a paragraph, a link, a form, an image and a list. 
// 2. Import Exercise component to the App.js file and display it. 
// Expected Output:(without the grey border)
// PART II:
// 1. Add the object "const style_header" to the component Exercise. Use this object to style the <h1>. 
// PART III:
// 1. Create a new css file named Exercise.css and import it in your Exercise component. 
// 2. Add the ".para" CSS properties to the CSS file, and apply them to the paragraph tag: 

import './App.css';
import UserFavoriteAnimals from "./components/UserFavoriteAnimals"
import Exercise3 from "./components/Exercise3"
import "./components/Exercise.css"

const myelement = <h1>I Love JSX!</h1>;
const sum = 5 + 5;
const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

function App() {
  return (
    <>
    <div className="App">
      <p>Hello World!</p>
      {myelement}
      <p>React is {sum} times better with JSX</p>
    </div>
    <div>
      <h3>{user.firstName} {user.lastName}</h3>
    </div>
    {UserFavoriteAnimals(user.favAnimals)}
    {Exercise3()}
    </>
  );
}
export default App;
