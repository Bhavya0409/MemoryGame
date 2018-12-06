import React, { Component } from 'react';
import './App.scss';
import GameBoard from './GameBoard';
import OpeningForm from './OpeningForm';

class App extends Component {

  state = {
    gameStarted: false,
    selected: []
  };

  render() {
    const {gameStarted} = this.state;
    return (
      <div className="App">
        {gameStarted ? <GameBoard/> : <OpeningForm/>}
      </div>
    );
  }
}

export default App;
