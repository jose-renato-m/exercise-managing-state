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
}

export default Game;