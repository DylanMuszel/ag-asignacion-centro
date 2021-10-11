const { create, select, cross, mutate, stopChriteria } = require('./evolution');
const { Employee } = require('./model');

const BREN = Employee("Bren", [1,2,3], [4,5,6])
const EMPLOYEES = [ BREN ];

const monthDays = 30;
const numberOfCalendars = 100;

function main() {
  let population = create(monthDays, EMPLOYEES, numberOfCalendars);
  let iteration = 1;

  while (stopChriteria(iteration, population)) {
    population = select(population, GENERATIONAL_JUMP);

    population = mutate(population, MUTATION_PROBABILITY);

    population = cross(population);

    iteration += 1;

    console.log(`Iteration: ${iteration} with length: ${population.length}`);
  }

  console.log('Finished!');
}

main();
