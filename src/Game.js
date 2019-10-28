import React, { Component } from 'react';

class Game extends Component {
  constructor(props) {
    super(props);
    const gameNums = this.generateNums();
    this.state = {
      value1: gameNums[0],
      value2: gameNums[1],
      value3: gameNums[2],
      proposedAnswer: gameNums[3]
    };
  }
  
  generateNums = () => {
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);
    const proposedAnswer = 
      Math.floor(Math.random() * 3) + value1 + value2 + value3;
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


}

export default Game;