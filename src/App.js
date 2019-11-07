import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [color, setColor] = useState('#282c34');

  function handleBtnClick() {
    setColor(color === '#282c34' ? '#00ccff' : '#282c34');
  }

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: color }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is a React demo.
        </p>
        <button onClick={handleBtnClick}>改变主题</button>
      </header>
    </div>
  );
}

export default App;
