const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name = "", id = 0, email = "", officeNumber = "") {
        super(name, id, email);

        this.officeNumber = parseInt(officeNumber);
        this.role = "Manager"; 
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;