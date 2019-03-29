import React from 'react';
import './Board.css';

function Tile(props) {
  return (
    <div class="boggle">
      <span>{props.value}</span>
    </div>
  );
}

export default class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tiles: ["U","I","S","L","D","U","E","M","T","B","Y","L","Y","I","R","D"],
    }
  }

  renderTile(i) {
    return (
      <Tile value={this.state.tiles[i]} />
    )
  }
  render() {
    return (
      <div id="board">
        <div class="row">
          {this.renderTile(0)}
          {this.renderTile(1)}
          {this.renderTile(2)}
          {this.renderTile(3)}
        </div>
        <div class="row">
          {this.renderTile(4)}
          {this.renderTile(5)}
          {this.renderTile(6)}
          {this.renderTile(7)}
        </div>
        <div class="row">
          {this.renderTile(8)}
          {this.renderTile(9)}
          {this.renderTile(10)}
          {this.renderTile(11)}
        </div>
        <div class="row">
          {this.renderTile(12)}
          {this.renderTile(13)}
          {this.renderTile(14)}
          {this.renderTile(15)}
        </div>
      </div>
    );
  }
}