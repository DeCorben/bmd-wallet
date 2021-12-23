import React from 'react';

const entryBox = function box(props) {
  const {
    key,
    changer,
    value,
  } = props;
  return (
    <li key={key}>
      <input
        type="text"
        name={`entry${key}`}
        value={value}
        onChange={changer}
      />
    </li>
  );
};

export default entryBox;
