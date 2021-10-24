const Employee = require('./employee');

const BREN = new Employee("Bren", [1,6,11], [16,21,26])
const NICO = new Employee("Nico", [2,7,12], [17,22,27])
const MATI = new Employee("Mati", [3,8,13], [18,23,28])
const FLOR = new Employee("Flor", [4,9,14], [19,24,29])
const DYLAN = new Employee("Dylan", [5,10,15], [20,25,30])

const EMPLOYEES = [ BREN, NICO, MATI, FLOR, DYLAN ];

module.exports = EMPLOYEES;