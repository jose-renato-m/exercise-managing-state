import React, { Component } from 'react';

class Game extends Component {
  constructor(props) {
    super(props);
    const valuesArray = this.makeNewQuestion();
    this.state = {
      value1: valuesArray[0],
      value2: valuesArray[1],
      value3: valuesArray[2],
      proposedAnswer: valuesArray[3]
    };
  }
  
  makeNewQuestion = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = Math.floor(Math.random() * 3) + (value1 + value2 + value3);
    return [value1, value2, value3, proposedAnswer];
  };

  updateState = () => {
  const gameNums = this.generateNums();
    this.setState(prevState => ({
    value1: gameNums[0],
    value2: gameNums[1],
    value3: gameNums[2],
    proposedAnswer: gameNums[3]
    }));
  };

  checkAnswer = answer => {
    const isEqual =
      this.state.value1 + this.state.value2 + this.state.value3 ===
      this.state.proposedAnswer;
    return answer === isEqual;
  };

  onButtonClick = e => {
    this.updateState();
    const answer = Boolean(e.target.innerText === 'False' ? false : true);
    const isCorrect = this.checkAnswer(answer);
    this.props.onButtonClick(isCorrect);
  };

  render () {
  console.log(`Game component rendered`);
  console.log(
    `${this.state.value1 + this.state.value2 + this.state.value3} === ${
      this.state.proposedAnswer
    }`
  );
  return (
   <div className="game">
     <h2>Mental Math</h2>
     <div className="equation">
       <p className="text">{`${this.state.value1} + ${this.state.value2} + ${
         this.state.value3
  } = ${this.state.proposedAnswer}`}</p>
     </div>
     <button onClick={e => this.onButtonClick(e)}>True</button>
     <button onClick={this.onButtonClick}>False</button>
   </div>
  );
  }
}

export default Game;