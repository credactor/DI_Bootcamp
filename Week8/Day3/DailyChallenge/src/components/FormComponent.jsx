import React from "react";

function FormComponent ({ data, handleChange, handleSubmit }) {
    return(
    <>
    <form onSubmit={handleSubmit}>
        <h2>Sample form</h2>
        <input type="text" name="firstname" placeholder="First Name" value={data.firstname} onChange={handleChange}/><br/>
        <input type="text" name="lastname" placeholder="Last Name" value={data.lastname} onChange={handleChange}/><br/>
        <input type="text" name="age" placeholder="Age" value={data.age} onChange={handleChange}/><br/>
        <br/>
        <label>
            <input type="radio" name="gender" value="male" checked={data.gender === "male"} onChange={handleChange}/>Male
        </label><br/>
        <label>
            <input type="radio" name="gender" value="female" checked={data.gender === "female"} onChange={handleChange}/>Female
        </label><br/>
        <br/>
        <label htmlFor="dest">Destination: </label>
        <select name="destination" id="dest" value={data.destination} onChange={handleChange}>
            <option value="Thailand">Thailand</option>
            <option value="Japan">Japan</option>
            <option value="Brazil">Brazil</option>
        </select>
        <p>Dietary restrictions:</p>
        <input type="checkbox" name="nuts" id="diet1" value={data.nuts} onChange={handleChange}/>
        <label htmlFor="diet1">Nuts free</label><br/>
        <input type="checkbox" name="lactose" id="diet2" value={data.lactose} onChange={handleChange}/>
        <label htmlFor="diet1">Lactose free</label><br/>
        <input type="checkbox" name="vegan" id="diet3" value={data.vegan} onChange={handleChange}/>
        <label htmlFor="diet1">Vegan</label><br/>
        <br/>
        <button type="submit" >Submit</button>        
    </form>
    <h2>Entered information:</h2>
    <p>Your name: {data.firstname} {data.lastname}</p>
    <p>Your age: {data.age}</p>
    <p>Your gender: {data.gender}</p>
    <p>Your destination: {data.destination}</p>
    <p>Your dietary restrictions:</p>
    <ul>
        <li>Nuts free: {data.nuts ? "Yes" : "No"}</li>
        <li>Lactose free: {data.lactose ? "Yes" : "No"}</li>
        <li>Vegan: {data.vegan ? "Yes" : "No"}</li>
    </ul>
    </>
    )
}

export default FormComponent;