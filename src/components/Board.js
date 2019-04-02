import React from 'react';
import './Board.css';

function Tile(props) {
  return (
    <div className="boggle">
      <span>{props.value}</span>
    </div>
  );
}

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getBoard();
  }

  getBoard() {
    //TODO:  Need to figure out how to make configurable
    fetch('http://localhost:3000/v1/board', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(json => this.props.onBoardChange(json.tiles))
    .catch(error => console.error('Error:', error));
  }

  renderTile(i) {
    const tile = this.props.tiles[i];
    return (
      <Tile value={tile} />
    )
  }

  //TODO:  Consider reducing code by writing rows/tiles in a loop
  render() {
    return (
      <div id="board">
        <div className="row">
          {this.renderTile(0)}
          {this.renderTile(1)}
          {this.renderTile(2)}
          {this.renderTile(3)}
        </div>
        <div className="row">
          {this.renderTile(4)}
          {this.renderTile(5)}
          {this.renderTile(6)}
          {this.renderTile(7)}
        </div>
        <div className="row">
          {this.renderTile(8)}
          {this.renderTile(9)}
          {this.renderTile(10)}
          {this.renderTile(11)}
        </div>
        <div className="row">
          {this.renderTile(12)}
          {this.renderTile(13)}
          {this.renderTile(14)}
          {this.renderTile(15)}
        </div>
      </div>
    );
  }
}