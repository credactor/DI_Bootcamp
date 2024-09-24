// Part I : Phone 
// 1. Create a new Functional Component named Phone. Use the state hook to create the following state variables:
//     brand: "Samsung"
//     model: "Galaxy S20"
//     color: "black"
//     year: 2020
// 2. In the return of the Phone component, display the values of the state variables.
// 3. Import the Phone component and display it in your App.js.

// Part II : Change the Phone
// 1. In the Phone component create a function named changeColor that updates the state variable to ‘blue’
// 2. In the return, add a button with an onClick event that will call the changeColor function to change the color state variable.

import React, { useState } from "react";

const Phone = () => {
    const [phone, state] = useState({
        brand: "Samsung",
        model: "Galaxy S20",
        color: "black",
        year: 2020
    });
    const changeColor = () => {
        state({ ...phone, color: "blue" });
    };
    return (
    <>
        <h3>My phone is {phone.brand}</h3>
        <h4>It is {phone.color} {phone.model} from {phone.year}</h4>
        <button onClick={changeColor}>Change color</button>
    </>
    )
}

export default Phone;