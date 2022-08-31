const Employee = require("./Employee")

class Intern extends Employee {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }

    getPlanet() {
        return this.planet
    }

    getRole () {
        return "pirate"
    }
}

module.exports = Intern;