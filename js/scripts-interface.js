var CurrentTimeModule = require('./../js/scripts.js').currentTimeModule;
var AlarmClock = require('./../js/alarm.js').alarmModule;

$(document).ready(function() {
  var displayCurrentTime = new CurrentTimeModule();
  var alarmClock = new AlarmClock("test", "test", "test");
  $('.display-time').text(displayCurrentTime.currentTime);
  setInterval(function(){
    $('.display-time').empty();
    $('.display-time').text(displayCurrentTime.currentTime);
    console.log("HELLO!");
    if(alarmClock.checkIfSame(displayCurrentTime.currentTime()))
    {
      $('.initially-hidden').show();
    }
  }, 10000);


  // setInterval(function() {
  //   console.log(displayCurrentTime.currentSeconds());
  // }, 1000);

  $('.alarm').submit(function(event){
    console.log("TEST");
    event.preventDefault();
    var hours = $('#hours').val();
    var minutes = $('#minutes').val();
    var amorpm = $('#amorpm').val();
    alarmClock = new AlarmClock(hours, minutes, amorpm);
  });
});
