import React from 'react';
import './Board.css';

export default class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    console.log('handle change -> set target value: ' + e.target.value);
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {

    console.log('handle submit -> state text: ' + this.state.text);
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }

    console.log('before fetch for /words');

    //TODO:  Need to figure out how to make configurable
    fetch('http://localhost:3000/v1/words', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ term: this.state.text })
    }).then(res => res.json())
      //.then(json => this.setState({tiles: json.tiles}))
      .then(data => console.log(JSON.stringify(data)))
      .catch(error => console.error('Error:', error));
  }

  render() {
    return (
      <div id="word-submit">
        <form onSubmit={this.handleSubmit}>
          <label id="spaced">
            <strong>Current Word:</strong>
          </label>
          <input
            id="spaced"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button
            id="spaced"
            type="button"
            onClick={this.handleSubmit}
          >
            Submit Word
          </button>
        </form>
      </div>
    );
  }
}