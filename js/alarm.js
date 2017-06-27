var AlarmClock = function(hours, minutes, amorpm){
  this.hour = hours;
  this.minute = minutes;
  this.test = amorpm;
};

AlarmClock.prototype.checkAlarm = function(){
  return this.hour + ":" + this.minute + " " + this.test;
};

AlarmClock.prototype.checkIfSame = function(time){
  return this.checkAlarm() === time;
};

exports.alarmModule = AlarmClock;
