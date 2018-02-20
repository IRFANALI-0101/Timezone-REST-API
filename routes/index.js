var moment = require('moment-timezone');
var availableTimezones = moment.tz.names();

exports.index = function(req, res){
  res.render('index', { TZ : availableTimezones });
};

exports.diffAPI = function(req, res){
  var value  = moment().tz(req.params.val).format('Z');
  res.send(value);
};