// 1. Create a new Functional Component named Color, with a state variable favoriteColor which value is “red”.
// 2. Output the value in a header tag.
// 3. Note : The useEffect() hook is called after the component is rendered.
// In the useEffect(), alert “useEffect reached”
// 4. Note: The return is called when a component gets updated. It re-renders the DOM, with the new changes.
// Create a button that when clicked on, calls a function that changes the value of the favoriteColor property to “blue”.

import React, { useState, useEffect } from "react";

const Color = () => {
    const [favoriteColor, state] = useState("red");

    useEffect(() => { 
        // setTimeout(() => {state("yellow"); }, 3000);
        alert('useEffect reached');
     }, []);
    
    const changeColor = () => { state("blue"); };
    return (        
    <>
        <h2>My Favorite Color is {favoriteColor}</h2>
        <button onClick={changeColor}>Change color</button>
    </>
    )
}

export default Color;