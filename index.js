const { select, mutate, cross } = require('./evolution');
const { create } = require('./population');

const INDIVIDUAL_SELECTION_RATE = 0.5;
const NUMBERS_TO_MOVE_RATE = 0.4;
const GENERATIONAL_JUMP = 0.75;
const MUTATION_PROBABILITY = 0.1;
const INITIAL_POPULATION_SIZE = 1000000;

function main() {
  let population = create(INITIAL_POPULATION_SIZE, INDIVIDUAL_SELECTION_RATE, NUMBERS_TO_MOVE_RATE);
  let iteration = 1;

  while (population.length > 0) {
    population = select(population, GENERATIONAL_JUMP);

    population = mutate(population, MUTATION_PROBABILITY);

    population = cross(population);

    iteration += 1;

    console.log(`Iteration: ${iteration} with length: ${population.length}`);
  }

  console.log('Finished!');
}

main();
