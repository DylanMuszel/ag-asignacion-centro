const REPEATED_EMPLOYEES_WEIGHT = -1000;
const FREE_DAYS_PER_EMPLOYEE_WEIGHT = -200;
const MANDATORY_DAY_WEIGHT = 50;
const PREFERRED_DAY_WEIGHT = 20;
const CONTINUOUS_EXTRA_DAY_WEIGHT = -30;

function calculateAptitude(calendar, employees) {
    return repeatedEmployeesPerDayScore(calendar)
    + employees.map(employee => freeDaysAmountPerEmployeeScore(calendar, employee)
        + mandatoryDaysPerEmployeeScore(calendar, employee)
        + preferredDaysPerEmployeeScore(calendar, employee)
        + continuousWorkingDaysScore(calendar, employee)
    ).reduce((a, b) => a + b, 0)

}

function repeatedEmployeesPerDayScore(calendar) {
    const dayWeight = REPEATED_EMPLOYEES_WEIGHT / calendar.days.length
    return calendar.days.map(day => {
            let employeesPerDay = [...new Set(day.employees)].length
            return (employeesPerDay === 4) ? 0 : dayWeight
        }
    )
}

function freeDaysAmountPerEmployeeScore(calendar, employee) {
    let freeDays = getFreeDays(calendar, employee).length
    return (freeDays === 6) ? 0 : FREE_DAYS_PER_EMPLOYEE_WEIGHT
}

function mandatoryDaysPerEmployeeScore(calendar, employee) {
    let freeDays = getFreeDays(calendar, employee)
    return employee.mandatoryDays.map(mandatoryDay => freeDays.contains(mandatoryDay) ? MANDATORY_DAY_WEIGHT : 0)
}

function preferredDaysPerEmployeeScore(calendar, employee) {
    let freeDays = getFreeDays(calendar, employee)
    return employee.preferredDays.map(preferredDay => freeDays.contains(preferredDay) ? PREFERRED_DAY_WEIGHT : 0)
}

function continuousWorkingDaysScore(calendar, employee) {
    const continuousWorkingDays = getContinuousWorkingDays(calendar, employee)
    return continuousWorkingDays
        .map(cantDays => cantDays - 4)
        .filter(cantDays => cantDays > 0)
        .reduce((a, b) => a + b, 0) * CONTINUOUS_EXTRA_DAY_WEIGHT
}

function getContinuousWorkingDays(calendar, employee) {
    let freeDays = getFreeDays(calendar, employee)
    return calendar.days.reduce((accum, day) => {
        if (!freeDays.contains(day))
            accum[accum.length - 1]++;
        else
            accum.push(0);
    }, [0])
}

function getFreeDays(calendar, employee) {
    return calendar.days.filter(day => !day.employees.contains(employee)).map(freeDay => freeDay.number)
}

module.exports = calculateAptitude;

