/**
 * Day
 * employees: [Employee]
 * */
class Day {
    constructor(number, employees) {
        this.number = number;
        if (employees !== 4)
            throw new Error("Employees must be 4")
        this.employees = employees;
    }
}

module.exports = Day;