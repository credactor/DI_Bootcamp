// Part I:
// 1. Create a new Functional component named Events. 
// 2. Create an arrow function called clickMe. It should alert the string ‘I was clicked’.
// 3. In the return, create a button that when clicked on, calls the clickMe function. Use the onClick event handler. 

// Part II:
// 1. In the Events Functional component, in the return, create an input tag that has an onKeyDown event handler, that listens to a function called handleKeyDown.
// 2. When you type something in the input field and press the ‘Enter key’, the handleKeyDown function will check if the ‘Enter key’ was pressed and will alert a message with the input text value:

// Part III:
// 1. In the Events Functional component, using the state hook, declare a state variable named isToggleOn and set it to true.
// 2. In the return, create a button that has an onClick event that will switch the state variable between ‘ON’ and ‘OFF’
// 3. Create a function that will be called by the onClick event handler. In the function you should toggle the value of the isToggleOn state variable. 

import React, { useState } from "react";

const clickMe = () => alert("I was clicked");

const handleKeyDown = (e) => {
    if (e.key != "Enter") return;
    alert("The Enter key was pressed, your input is: "+ e.target.value);
}

const Events = () => {
    const [isToggleOn, state] = useState(true);
    const toggle = () => { state(!isToggleOn); };
    return (
    <>
        <button onClick={clickMe}>Click Me</button>
        <input id="myinput" type="text" onKeyDown={handleKeyDown}/>
        <button onClick={toggle}>{isToggleOn ? "ON" : "OFF"}</button>
    </>
    )
}
export default Events;