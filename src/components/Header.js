import React from 'react';
import plus from '../images/plus.png';

export default function Header() {
  return (
    <header>
      <h1>Tracklyzer</h1>
      <img src={plus} alt="Plus Icon" />
    </header>
  );
}
