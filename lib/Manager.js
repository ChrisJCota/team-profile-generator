const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.title = 'Manager';
    }
    getOfficeNum() {
        return this.officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}
module.exports = Manager;