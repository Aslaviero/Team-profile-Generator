const Employee = require("./Employee");

 class Manager extends Employee {
    constructor (name, id, email, officenumber) {
        super (name, id, email);
        this.officenumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
 }

 module.exports = Manager;