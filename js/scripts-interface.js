var CurrentTimeModule = require('./../js/scripts.js').currentTimeModule;


$(document).ready(function() {
  var displayCurrentTime = new CurrentTimeModule();
  setInterval(function(){
    $('.display-time').empty();
    $('.display-time').text(displayCurrentTime.currentTime);
    console.log("HELLO!")
  }, 1000);
  // console.log(exampleInstance.examplePrototype());
  $('#alarm').submit(function(event){
    event.preventDefault();
    var hours = $('#hours').val();
    var minutes = $('#minutes').val();
    var amorpm = $('#amorpm').val();
    var alarmClock = new AlarmClock(hours, minutes, amorpm);
    alarmClock.checkAlarm(hours, minutes, amorpm);
  });
});
