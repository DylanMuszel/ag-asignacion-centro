const { create, select, cross, mutate, stopChriteria } = require('./genethicAlgorithm');
const { EMPLOYEES } = require('./model');

const monthDays = 30;
const numberOfCalendars = 100;

function main() {
  let population = create(monthDays, EMPLOYEES, numberOfCalendars);
  let iteration = 1;

  while (stopChriteria(iteration, population)) {
    population = select(population, EMPLOYEES);

    population = mutate(population);

    population = cross(population);

    iteration += 1;
    console.log(`Iteration: ${iteration} with length: ${population.length}`);
  }

  console.log('Finished!');
}

main();
