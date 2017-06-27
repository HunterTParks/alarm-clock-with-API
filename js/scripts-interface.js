// IMPORT NODE MODULES (OBJECTS WITH ASSOCIATED PROTOTYPE METHODS)

var CurrentTimeModule = require('./../js/scripts.js').currentTimeModule;
var AlarmClock = require('./../js/alarm.js').alarmModule;

// DOCUMENT READY (PAGE LOAD)

$(document).ready(function() {

  // CREATE NEW, EMPTY, SEMI-GLOBAL VARIABLES
  var displayCurrentTime = new CurrentTimeModule();
  var alarmClock = new AlarmClock("test", "test", "test");

  // DISPLAY CURRENT TIME
  $('.display-time').text(displayCurrentTime.currentTime);

  //UPDATE CURRENT TIME
  setInterval(function(){
    $('.display-time').empty();
    $('.display-time').text(displayCurrentTime.currentTime);

    //CHECK IF CURRENT TIME AND INPUTTED TIME ARE THE SAME AND DISPLAY WAKE-UP MESSAGE
    if(alarmClock.checkIfSame(displayCurrentTime.currentTime()))
    {
      $('.initially-hidden').show();
    }
  }, 10000);

  // UNUSED FUNCTION TO SEE SECONDS COUNTED IN CONSOLE

  // setInterval(function() {
  //   console.log(displayCurrentTime.currentSeconds());
  // }, 1000);


  // SUBMIT LISTENER

  $('.alarm').submit(function(event){
    event.preventDefault();
    var hours = $('#hours').val();
    var minutes = $('#minutes').val();
    var amorpm = $('#amorpm').val();
    alarmClock = new AlarmClock(hours, minutes, amorpm);
  });
});
