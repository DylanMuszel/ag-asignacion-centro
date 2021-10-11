/**
 * Employee
 * name: String
 * mandatoryDays: [Int]
 * preferredDays: [Int]
 * */
class Employee {
    constructor(name, mandatoryDays, preferredDays) {
        this.name = name;
        this.mandatoryDays = mandatoryDays;
        this.preferredDays = preferredDays;
    }
}

module.exports = Employee