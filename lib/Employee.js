class Employee {
    constructor (id, email, name) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    get name () {
        return this.name;
    }

    getId () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }

    getRole () {
        return this.role;
    }
}

module.exports = Employee;