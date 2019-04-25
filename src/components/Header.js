import React from 'react';
import plus from '../images/plus.png';

export default function Header(props) {
  return (
    <header>
      <h1>Tracklyzer</h1>
      <img
        onClick={event => {
          props.handleNewItem(event);
        }}
        src={plus}
        alt="Plus Icon"
      />
    </header>
  );
}
