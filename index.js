/* eslint-disable no-unused-expressions */
const {
  create, createNewGeneration, select, cross, mutate, stopCriteria, calculateAptitude,
} = require('./genethicAlgorithm');
const { EMPLOYEES } = require('./model');
const fs = require('fs');

const monthDays = 30;
const numberOfCalendars = 100;

function main() {
  let population = create(monthDays, EMPLOYEES, numberOfCalendars);
  let iteration = 1;

  while (stopCriteria(iteration, 2000)) {
    population = select(population, EMPLOYEES);

    population = mutate(population);

    population = cross(population);

    population = population.concat(createNewGeneration(monthDays, EMPLOYEES, numberOfCalendars, population.length));
    iteration += 1;
    console.log(`Iteration: ${iteration} with length: ${population.length}`);
  }
  const individualsWithScores = population
    .map((individual) => ({ 
      days: individual.days.map((day) => ({
        number: day.number,
        employees: day.employees.map((employee) => employee.name)
      })), 
      score: calculateAptitude(individual, EMPLOYEES) 
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 20);
  console.log('Finished!');

  fs.writeFileSync('results.json', JSON.stringify({ "results": individualsWithScores }));
}

main();
