import React from 'react';
import logo from './logo.svg';
import './App.css';
import './clock.scss';

function App() {
  return (
    <div className="App">
      <h2> Clock React App</h2>

      <div className="clock-box">
        <div className="clock-face">
          <div className="hours-container">
              <div className="hours"></div>
          </div>
          <div className="minutes-container">
              <div className="minutes"></div>
          </div>
          <div className="centre">
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
