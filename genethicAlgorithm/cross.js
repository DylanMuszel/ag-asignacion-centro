const { Calendar } = require("../model");
const util = require('util');

function cross(population) {
  var newPopulation = [];
  while (population.length > 1) {
    var index1 = Math.floor(Math.random() * population.length);
    var index2 = index1;
    while (index1 == index2) {
      index2 = Math.floor(Math.random() * population.length);
    }
    var children = crossIndividuals(population[index1], population[index2]);
    population = population.filter((el, index) => index != index1 && index != index2 )
    newPopulation.push(children[0], children[1]);
  }
  return newPopulation;
}

function crossIndividuals(a, b) {
  return [
    new Calendar(a.days.slice(0, a.days.length / 2).concat(b.days.slice(a.days.length / 2))),
    new Calendar(b.days.slice(0, a.days.length / 2).concat(a.days.slice(a.days.length / 2)))
  ]
}

module.exports = cross;
