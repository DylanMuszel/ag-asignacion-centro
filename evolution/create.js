const { Calendar, Day } = require('../model/index');

/**
 * create(Int, [Employees]): [Calendar]
 * */
function create(cantDays, employees, numberOfCalendars) {
  return [...Array(numberOfCalendars)].map(_ => createCalendar(cantDays, employees))
}

function createCalendar(cantDays, employees) {
  return new Calendar([...Array(cantDays)].map(_ => createDay(employees)))
}

function createDay(employees){
  let randomEmployees = [...Array(4)].map(_ => employees[Math.floor(Math.random()*employees.length)])
  return new Day(randomEmployees)
}


module.exports = create;
