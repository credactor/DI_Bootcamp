import React, { useState } from 'react';
import './App.css';
import FormComponent from "./components/FormComponent"

function App() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    gender: "",
    destination: "",
    nuts: false,
    lactose: false,
    vegan: false
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function handleSubmit(event) {
    // event.preventDefault();
    
    const queryParams = new URLSearchParams({
      firstname: data.firstname,
      lastname: data.lastname,
      age: data.age,
      gender: data.gender,
      destination: data.destination,
      nuts: data.nuts,
      lactose: data.lactose,
      vegan: data.vegan,
    }).toString();

    window.location.href = `/submit?${queryParams}`;
  }

  return (
    <>
      <FormComponent
      data = {formData}
      handleChange = {handleChange}
      handleSubmit = {handleSubmit}
      />
    </>
  );
}

export default App;
