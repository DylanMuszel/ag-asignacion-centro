/* eslint-disable no-unused-expressions */
const {
  create, select, cross, mutate, stopCriteria, calculateAptitude,
} = require('./genethicAlgorithm');
const { EMPLOYEES } = require('./model');
const fs = require('fs');

const monthDays = 30;
const numberOfCalendars = 1000;

function main() {
  let population = create(monthDays, EMPLOYEES, numberOfCalendars);
  let iteration = 1;

  while (stopCriteria(iteration, 200)) {
    let bestIndividuals = select(population, EMPLOYEES);

    let newIndividuals = [...bestIndividuals]

    newIndividuals = mutate(newIndividuals);

    newIndividuals = cross(newIndividuals);
    population = bestIndividuals.concat(newIndividuals);
    fs.appendFileSync('bestCandidateAptitudeHistory.csv', 
      `${JSON.stringify(population.map((individual) => calculateAptitude(individual, EMPLOYEES))
      .sort((a, b) => b - a)[0])},`
    );

    iteration += 1;
    console.log(`Iteration: ${iteration} with length: ${population.length}`);
  }
  const individualsWithScores = population
    .map((individual) => ({ 
      individual,
      freeDays: EMPLOYEES.map((employee) => ({
        employee: employee.name,
        days: getFreeDays(individual, employee),
      })), 
      score: calculateAptitude(individual, EMPLOYEES) 
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 20);
  console.log('Finished!');

  fs.writeFileSync('results.json', JSON.stringify({ "results": individualsWithScores }));
}

function getFreeDays(calendar, employee) {
  return calendar.days.filter((day) => !day.employees.includes(employee)).map((freeDay) => freeDay.number);
}

main();

function bestIndividual(population) {
  return population.sort((a, b) => calculateAptitude(b, EMPLOYEES) - calculateAptitude(a, EMPLOYEES))[0];
}
