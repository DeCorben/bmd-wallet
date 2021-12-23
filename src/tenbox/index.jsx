/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import ReactDOM from 'react-dom';
import React from 'react';
import entryBox from './entrybox.jsx';

class Tenbox extends React.Component {
  constructor() {
    super();
    this.state = {
      entry0: 5,
      entry1: 4,
      entry2: 3,
      entry3: 2,
      entry4: 1,
      entry5: 8,
      entry6: 9,
      entry7: 7,
      entry8: 6,
      entry9: 0,
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
          {entryBox({
            key: 0,
            value: this.state.entry0,
            changer: this.changer,
          })}
          {entryBox({
            key: 1,
            value: this.state.entry1,
            changer: this.changer,
          })}
          {entryBox({
            key: 2,
            value: this.state.entry2,
            changer: this.changer,
          })}
          {entryBox({
            key: 3,
            value: this.state.entry3,
            changer: this.changer,
          })}
          {entryBox({
            key: 4,
            value: this.state.entry4,
            changer: this.changer,
          })}
          {entryBox({
            key: 5,
            value: this.state.entry5,
            changer: this.changer,
          })}
          {entryBox({
            key: 6,
            value: this.state.entry6,
            changer: this.changer,
          })}
          {entryBox({
            key: 7,
            value: this.state.entry7,
            changer: this.changer,
          })}
          {entryBox({
            key: 8,
            value: this.state.entry8,
            changer: this.changer,
          })}
          {entryBox({
            key: 9,
            value: this.state.entry9,
            changer: this.changer,
          })}
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
