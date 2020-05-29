/* global chrome */
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  function createAlarm() {
    let startAlarm = document.getElementById('startAlarm');
    let stopAlarm = document.getElementById('stopAlarm');
    chrome.alarms.create('alarm', {periodInMinutes: 15});
    startAlarm.innerHTML = "Alarm set!";
    stopAlarm.innerHTML = "Stop Alarm!";
    chrome.runtime.sendMessage({event: "alarmSet"});
  }

  function stopAlarm() {
    let startAlarm = document.getElementById('startAlarm');
    let stopAlarm = document.getElementById('stopAlarm');
    stopAlarm.innerHTML = "Stopped alarms!";
    startAlarm.disabled = false;
    startAlarm.innerHTML = "Begin selfcare!";
    chrome.runtime.sendMessage({event: "alarmStop"});
  }

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
          <button type="button" className="btn btn-primary" id="startAlarm" onClick={createAlarm}> Begin Selfcare!</button>
          <button type="button" className="btn btn-primary" id="stopAlarm" onClick={stopAlarm}> Stop Alarm!</button>
        </p>
      </header>
    </div>
  );
}

export default App;