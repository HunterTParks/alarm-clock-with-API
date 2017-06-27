//business logic stuff for a particular module
var CurrentTimeModule = function() {
  // this.currentTime = moment().format("LTS");
};

CurrentTimeModule.prototype.currentTime = function() {
  return moment().format("LT");
};

exports.currentTimeModule = CurrentTimeModule;
