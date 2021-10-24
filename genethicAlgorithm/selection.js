const calculateAptitude = require('./aptitudeFunction')

/**
 * Selection method chosen is ranking
 * */
function select(population, employees) {
  return [...population].sort((calendarA, calendarB) => compareCalendars(calendarA, calendarB, employees)).slice(0, population.length /2)
}

function compareCalendars(calendarA, calendarB, employees) {
  let aptitudeA = calculateAptitude(calendarA, employees);
  let aptitudeB = calculateAptitude(calendarB, employees);
  if (aptitudeA < aptitudeB)
    return 1;
  else if(aptitudeA > aptitudeB)
    return -1;
  return 0;
}

module.exports = select;
