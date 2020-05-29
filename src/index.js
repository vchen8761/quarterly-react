/* global chrome */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function checkDisabled() {
  let startAlarm = document.getElementById('startAlarm');
  chrome.runtime.onMessage.addListener(message => {
    if(message.event === "disableStartButton") {
        startAlarm.disabled = true;
        chrome.alarms.get('alarm', function (alarm){
            startAlarm.innerHTML = (Math.round((alarm.scheduledTime - Date.now())/1000/60));
        });
    }
  });
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

checkDisabled();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
