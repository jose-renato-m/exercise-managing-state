import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game.js';
import Score from './Score.js';

class App extends Component {
 state = {
   numQuestions: 0,
   numCorrect: 0
 };

 handleButtonClick = isCorrect => {
   this.setState(currState => ({
    numQuestions: currState.numQuestions + 1,
    numCorrect: isCorrect ? currState.numCorrect + 1 : currState.numCorrect
   }));
 };
 renderGame = game => <Game onButtonClick={this.handleButtonClick} />

 render() {
   return (
     <div className="App">
       <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
         <h1 className="App-title">ReactND - Coding Practice</h1>
         <p>Exercise - Managing State</p>
       </header>
       <main className="App-main">
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${value1} + ${value2} + ${value3} = ${proposedAnswer}`}</p>
          </div>
          <button>True</button>
          <button>False</button>
          <p className="text">
            Your Score: {numCorrect}/{numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
