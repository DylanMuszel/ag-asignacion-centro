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
  let randomEmployees = employees.sort((a, b) => 0.5 - Math.random()).slice(0, 4);
  return new Day(number, randomEmployees)
}


module.exports = create;
