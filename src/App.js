import React, { useState } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState("Click the button to generate a quote!");

  const quotes = [
    "This is a simple quote.",
    "Life is what happens when you're busy making other plans.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "The only limit to our realization of tomorrow will be our doubts of today."
  ];

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="quote">{quote}</div>
        <button onClick={generateQuote} className="generate-btn">Generate Quote</button>
      </div>
    </div>
  );
}

export default App;