//business logic stuff for a particular module

//CURRENT TIME OBJECT/MODULE
var CurrentTimeModule = function() {
  // this.currentTime = moment().format("LTS");
};

//GET AND FORMAT CURRENT TIME
CurrentTimeModule.prototype.currentTime = function() {
  return moment().format("LT");
};

//GET AND FORMAT CURRENT TIME WITH SECONDS (FOR CONSOLE)
CurrentTimeModule.prototype.currentSeconds = function() {
  return moment().format("LTS");
};


//EXPORT THE MODULE
exports.currentTimeModule = CurrentTimeModule;
