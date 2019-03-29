import React from 'react';
import './Board.css';
//import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

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

    this.state = {
      tiles: ["","","","","","","","","","","","","","","",""],
    }

    // TODO:  Clean up async initialization - need a prestate while the
    // remote call & promise complete.  This method loads with a default &
    // then updates after the fact.
    this.getBoard();
  }

  getBoard() {
    fetch('http://localhost:3000/v1/board', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(json => this.setState({tiles: json.tiles}))
    .then(data => console.log(JSON.stringify(data)))
    .catch(error => console.error('Error:', error));
  }
  
  renderTile(i) {
    return (
      <Tile value={this.state.tiles[i]} />
    )
  }

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