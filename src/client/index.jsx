/* eslint-disable import/extensions */
import ReactDOM from 'react-dom';
import React from 'react';
import tenbox from './tenbox/index.jsx';

class AppPage extends React.Component {
  constructor() {
    super();
    this.state = {
      entry: [
        0,
        0,
        0,
        0,
        8,
        0,
        0,
        0,
        0,
        0,
      ],
    };
  }

  changer(change) {
    const { name, value } = change.target;
    if (name.startsWith('entry')) {
      const index = name.split('-')[1];
      const { entry } = this.state;
      entry.splice(index, 1, value);
      this.setState({ entry });
    }
  }

  render() {
    const { entry } = this.state;
    return (
      <div>
        {tenbox({ changer: this.changer, entry })}
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <AppPage />
  </div>,
  document.getElementById('root'),
);
