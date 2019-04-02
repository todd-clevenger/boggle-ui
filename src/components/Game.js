import React from 'react';
import './Game.css';
import Board from './Board';
import WordCheck from './WordCheck';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.handleBoardChange = this.handleBoardChange.bind(this);
    this.state = {
      tiles: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    };
  }

  handleBoardChange(tiles) {
    console.log("handleBoardChange => " + tiles)
    this.setState({ tiles: tiles })
  }

  render() {
    const tiles = this.state.tiles;
    return (
      <div id="boggle-container">
        <div id="board">
          <h2 id="center">
            Boggle Words
          </h2>
          <Board
            tiles={tiles}
            onBoardChange={this.handleBoardChange}
          />
          <WordCheck
            tiles={tiles}
          />
        </div>
      </div>
    );
  }
}