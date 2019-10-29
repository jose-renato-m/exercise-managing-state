import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Score from './Score.js';
import Game from './Game.js';

class App extends Component {
 state = {
   correctAnswer: 0,
   numQuestions: 0
 };

 handleAnswer = answerWasCorrect => {
   if (answerWasCorrect) {
     this.setState(currState => ({
       correctAnswer: currState.correctAsnwer + 1,     
    }));
   }
   this.setState(currState => ({
     numQuestions: currState.numQuestions + 1,
   }));
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
         <Game onButtonClick={this.handleButtonClick} />
         {this.renderGame()}
         <Score
           numQuestion={this.state.numQuestions}
           numCorrect={this.state.numCorrect}
         />
       </main>
     </div>        
    );
  }
}

export default App;
