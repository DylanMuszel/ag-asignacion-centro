const util = require('util');

function mutate(calendars) {
  if (Math.random() < 0.8) {
    calendars[Math.floor(Math.random() * calendars.length)].mutate();
  }
  
  return calendars
}

module.exports = mutate;
