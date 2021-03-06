const REPEATED_EMPLOYEES_WEIGHT = -10;
const FREE_DAYS_PER_EMPLOYEE_WEIGHT = -90;
const MANDATORY_DAY_WEIGHT = 60;
const PREFERRED_DAY_WEIGHT = 50;
const CONTINUOUS_EXTRA_DAY_WEIGHT = -3;

function calculateAptitude(calendar, employees) {
  return repeatedEmployeesPerDayScore(calendar)
        + employees.map((employee) => freeDaysAmountPerEmployeeScore(calendar, employee)
            + mandatoryDaysPerEmployeeScore(calendar, employee)
            + preferredDaysPerEmployeeScore(calendar, employee)
            + continuousWorkingDaysScore(calendar, employee))
          .reduce((a, b) => a + b, 0);
}

function repeatedEmployeesPerDayScore(calendar) {
  const dayWeight = REPEATED_EMPLOYEES_WEIGHT / calendar.days.length;
  return calendar.days.map((day) => {
    const employeesPerDay = [...new Set(day.employees)].length;
    return (employeesPerDay === 4) ? 0 : dayWeight;
  }).reduce((a, b) => a + b, 0);
}
function freeDaysAmountPerEmployeeScore(calendar, employee) {
  const freeDays = getFreeDays(calendar, employee).length;
  return (freeDays === 6) ? 0 : FREE_DAYS_PER_EMPLOYEE_WEIGHT;
}

function mandatoryDaysPerEmployeeScore(calendar, employee) {
  const freeDays = getFreeDays(calendar, employee);
  return employee.mandatoryDays.map((mandatoryDay) => (freeDays.includes(mandatoryDay) ? MANDATORY_DAY_WEIGHT : 0))
    .reduce((a, b) => a + b, 0);
}

function preferredDaysPerEmployeeScore(calendar, employee) {
  const freeDays = getFreeDays(calendar, employee);
  return employee.preferredDays.map((preferredDay) => (freeDays.includes(preferredDay) ? PREFERRED_DAY_WEIGHT : 0)).reduce((a, b) => a + b, 0);
}

function continuousWorkingDaysScore(calendar, employee) {
  return getContinuousWorkingDays(calendar, employee) * CONTINUOUS_EXTRA_DAY_WEIGHT;
}

function getContinuousWorkingDays(calendar, employee) {
  let lastDay = 1;
  let extraDays = 0;
  getFreeDays(calendar, employee).map((day) => {
    extraDays += Math.max(0, day - lastDay - 4);
    lastDay = day;
  });
  extraDays += Math.max(0, 30 - lastDay - 4);
  return extraDays;
}

function getFreeDays(calendar, employee) {
  return calendar.days.filter((day) => !day.employees.includes(employee)).map((freeDay) => freeDay.number);
}

module.exports = calculateAptitude;
