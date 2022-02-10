import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';



 const App = () => {

   const [numQuestions, setNumQuestions] = useState(0)
   const [numCorrect, setNumCorrect] = useState(0)
   const value1 = Math.floor(Math.random() * 100);
   const value2 = Math.floor(Math.random() * 100);
   const value3 = Math.floor(Math.random() * 100);
   const [proposedAnswer, setProposedAnswer] = useState(0)
   const sum = value1 + value2 + value3
   
   useEffect(() => {
      setProposedAnswer(Math.floor(Math.random() * 3) + sum)
     },
     [numQuestions],
    );
   
    const handleClickTrue = () => {
       setNumQuestions(numQuestions + 1)
      if(sum === proposedAnswer) {
         setNumCorrect(numCorrect + 1)
      }
    }
    
    const handleClickFalse = () => {
       setNumQuestions(numQuestions + 1)
      if(sum !== proposedAnswer) {
         setNumCorrect(numCorrect + 1)
      }
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button onClick={handleClickTrue}>True</button>
          <button onClick={handleClickFalse}>False</button>
          <p className="text">
            Your Score: {numCorrect}/{numQuestions}
          </p>
        </div>
      </div>
    );
}

export default App;
