chrome.runtime.onInstalled.addListener(function() {
    console.log("Opened Quarterly!");
});

chrome.alarms.onAlarm.addListener(function (alarm){
    console.log('Alarm went off!');
    alert("15 minutes have passed! Remember to hydrate yourself and rest your eyes...");
});

var running = false;

chrome.runtime.onMessage.addListener(message => {
    if(message.event == "alarmStop") {
        running = false;
        chrome.alarms.clearAll();
        console.log("Alarm stopped!!!");
    }
});

chrome.runtime.onMessage.addListener(message => {
    if(message.event == "alarmSet") {
        console.log("Alarm set!!!");
        running = true;
        setInterval(function (){
            if(running) {
                chrome.runtime.sendMessage({event: "disableStartButton"});
            }
        }, 500)
    }
})

// For debugging in console
// setInterval(function (){
//     chrome.alarms.get('alarm', function (alarm){
//         if(typeof alarm != 'undefined') {
//             console.log('Getting Alarm info');
//             console.log(Math.round((alarm.scheduledTime - Date.now())/1000/60));
//             console.log(alarmSet);
//         }
//     });
// }, 60000);