// ALARM CLOCK OBJECT CONSTRUCTOR
var AlarmClock = function(hours, minutes, amorpm){
  this.hour = hours;
  this.minute = minutes;
  this.test = amorpm;
};

// PROTOTYPE METHOD TO FORMAT INPUTTED TIME AS A STRING
AlarmClock.prototype.checkAlarm = function(){
  return this.hour + ":" + this.minute + " " + this.test;
};

// PROTOTYPE METHOD TO CHECK IF INPUTTED TIME IS SAME AS ACTUAL TIME
AlarmClock.prototype.checkIfSame = function(time){
  return this.checkAlarm() === time;
};

// EXPORT OBJECT WITH ASSOCIATED METHODS
exports.alarmModule = AlarmClock;
