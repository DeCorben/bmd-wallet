/* eslint-disable import/extensions */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import entryBox from './entrybox.jsx';

const tenbox = function tenbox(props) {
  const {
    changer,
    entry,
  } = props;
  return (
    <div>
      <ol>
        {entryBox({
          key: 0,
          value: entry[0],
          changer,
        })}
        {entryBox({
          key: 1,
          value: entry[1],
          changer,
        })}
        {entryBox({
          key: 2,
          value: entry[2],
          changer,
        })}
        {entryBox({
          key: 3,
          value: entry[3],
          changer,
        })}
        {entryBox({
          key: 4,
          value: entry[4],
          changer,
        })}
        {entryBox({
          key: 5,
          value: entry[5],
          changer,
        })}
        {entryBox({
          key: 6,
          value: entry[6],
          changer,
        })}
        {entryBox({
          key: 7,
          value: entry[7],
          changer,
        })}
        {entryBox({
          key: 8,
          value: entry[8],
          changer,
        })}
        {entryBox({
          key: 9,
          value: entry[9],
          changer,
        })}
      </ol>
    </div>
  );
};

export default tenbox;
