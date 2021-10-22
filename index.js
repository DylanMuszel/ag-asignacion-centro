/* eslint-disable no-unused-expressions */
const {
  create, createNewGeneration, select, cross, mutate, stopCriteria, calculateAptitude,
} = require('./genethicAlgorithm');
const { EMPLOYEES } = require('./model');

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
  const individualsWithScores = population.map((individual) => ({ individual, score: calculateAptitude(individual, EMPLOYEES) }));
  console.log('Finished!');
}

main();
