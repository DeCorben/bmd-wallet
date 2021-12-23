/* eslint-disable react/destructuring-assignment */
import ReactDOM from 'react-dom';
import React from 'react';

class Tenbox extends React.Component {
  constructor() {
    super();
    this.state = {
      box: [5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    };
  }

  changer(change) {
    const { name, value } = change.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <ol>
          <li key="0">
            <input
              type="text"
              name="endpoint"
              value={this.state.box[0]}
              onChange={this.changer}
            />
          </li>
        </ol>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Tenbox />
  </div>,
  document.getElementById('root'),
);
