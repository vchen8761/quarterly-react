import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div id="popup">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <b> Quarterly </b> <br></br>
          <i> An app for selfcare. </i> <br></br>
            <strong> This timer will alert you every 15 minutes, or quarter of an hour, to practice selfcare.</strong>
        </p>
        <p>
          <button type="button" className="btn btn-primary" id="startAlarm"> Begin Selfcare!</button>
          <button type="button" className="btn btn-primary" id="stopAlarm"> Stop Alarm!</button>
        </p>
      </header>
    </div>
  );
}

export default App;
