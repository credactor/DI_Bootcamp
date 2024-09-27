import { useState } from 'react'
import './App.css'
import { quotes } from "../data/quotes"

function App() {
  let lastQuote = 0;
  const [quote, setQuote] = useState(quotes[lastQuote]);
  const [newColor, setColor] = useState('#8c8cff');

  const newQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    if (randomIndex === lastQuote) {
        randomIndex === 0 ? randomIndex ++ : randomIndex --
    }
    lastQuote = randomIndex;
    setQuote (quotes[randomIndex]);

    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor (randomColor);

    document.body.style.backgroundColor = randomColor;
    };

  return (
    <>
      <div id="box" style={{ color: newColor }}>
        <h1>{quote.quote}</h1>
        <h3>{quote.author}</h3>
        <button onClick={newQuote} style={{ backgroundColor: newColor }}>New Quote</button>
      </div>
    </>
  )
}

export default App;