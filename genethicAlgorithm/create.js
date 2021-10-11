const { Calendar, Day } = require('../model/index');

/**
 * create(Int, [Employees]): [Calendar]
 * */
function create(cantDays, employees, numberOfCalendars) {
  return [...Array(numberOfCalendars)].map(_ => createCalendar(cantDays, employees))
}

function createCalendar(cantDays, employees) {
  return new Calendar([...Array(cantDays).keys()].map(number => createDay(number+1, employees)))
}

function createDay(number, employees){
  let randomEmployees = [...Array(4)].map(_ => employees[Math.floor(Math.random()*employees.length)])
  return new Day(number, randomEmployees)
}


module.exports = create;
