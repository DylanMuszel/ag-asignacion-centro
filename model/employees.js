const Employee = require('./employee');

const BREN = new Employee("Bren", [1,2,3], [4,5,6])
const NICO = new Employee("Nico", [1,2,3], [4,5,6])
const MATI = new Employee("Mati", [1,2,3], [4,5,6])
const FLOR = new Employee("Flor", [1,2,3], [4,5,6])
const DYLAN = new Employee("Dylan", [1,2,3], [4,5,6])

const EMPLOYEES = [ BREN, NICO, MATI, FLOR, DYLAN ];

module.exports = EMPLOYEES;