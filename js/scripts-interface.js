var CurrentTimeModule = require('./../js/scripts.js').currentTimeModule;
var AlarmClock = require('./../js/alarm.js').alarmModule;

$(document).ready(function() {
  var displayCurrentTime = new CurrentTimeModule();
  var isAlarmMade = false;
  console.log(isAlarmMade);
  var alarmClock = new AlarmClock("test", "test", "test");
  setInterval(function(){
    $('.display-time').empty();
    $('.display-time').text(displayCurrentTime.currentTime);
    console.log("HELLO!");
    if(isAlarmMade === true)
    {
      console.log(alarmClock.checkAlarm());
      console.log(displayCurrentTime.currentTime());
      if(alarmClock.checkAlarm() == displayCurrentTime.currentTime())
      {
        alert("ALARM");
      }
    }
  }, 1000);
  $('.alarm').submit(function(event){
    console.log("TEST");
    event.preventDefault();
    var hours = $('#hours').val();
    var minutes = $('#minutes').val();
    var amorpm = $('#amorpm').val();
    alarmClock = new AlarmClock(hours, minutes, amorpm);
    isAlarmMade = true;
  });
});
