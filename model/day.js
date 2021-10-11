/**
 * Day
 * employees: [Employee]
 * */
class Day {
    constructor(employees) {
        if (employees !== 4)
            throw new Error("Employees must be 4")
        this.employees = employees;
    }
}

module.exports = Day;