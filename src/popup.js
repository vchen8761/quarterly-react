/* global chrome */
let startAlarm = document.getElementById('startAlarm');
let stopAlarm = document.getElementById('stopAlarm');

startAlarm.onclick = function() {
    // chrome.alarms.create('alarm', {delayInMinutes: alarmDuration.valueAsNumber});
    chrome.alarms.create('alarm', {periodInMinutes: 15});
    startAlarm.innerHTML = "Alarm set!";
    chrome.runtime.sendMessage({event: "alarmSet"});
};

stopAlarm.onclick = function () {
    // chrome.alarms.clearAll();
    chrome.runtime.sendMessage({event: "alarmStop"});
    stopAlarm.innerHTML = "Stopped alarms!";
    startAlarm.disabled = false;
    startAlarm.innerHTML = "Begin selfcare!";
};

chrome.runtime.onMessage.addListener(message => {
    if(message.event === "disableStartButton") {
        startAlarm.disabled = true;
        chrome.alarms.get('alarm', function (alarm){
            startAlarm.innerHTML = (Math.round((alarm.scheduledTime - Date.now())/1000/60));
        });
    }
});