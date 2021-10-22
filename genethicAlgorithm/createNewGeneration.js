const create = require('./create');

function createNewGeneration(cantDays, employees, numberOfCalendars, numberOfIndividualsInCurrentGeneration) {
 return create(cantDays, employees, numberOfCalendars - numberOfIndividualsInCurrentGeneration);
}

module.exports = createNewGeneration;
