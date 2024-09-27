import React, { useState } from 'react'
import './App.css'

function App() {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState(null);

  const calculation = () => {
    let res;
    switch (operation) {
      case 'add':
        res = parseFloat(num1) + parseFloat(num2);
        break;
      case 'subtract':
        res = parseFloat(num1) - parseFloat(num2);
        break;
      case 'multiply':
        res = parseFloat(num1) * parseFloat(num2);
        break;
      case 'divide':
        res = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        res = 0;
    }
    setResult(res);
  };

  return (
    <div id="container">
      <h2>Calculator</h2>
      <div id="selection">
        <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
        <span>
          <select id="operation" value={operation} onChange={(e) => setOperation(e.target.value)}>
            <option value="add">+</option>
            <option value="subtract">−</option>
            <option value="multiply">×</option>
            <option value="divide">/</option>
          </select>
        </span>
        <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
      </div>      
      <button onClick={calculation} id="calculate">Calculate</button>
      {result !== null && <h1>{result}</h1>}
    </div>
  )
}

export default App;
