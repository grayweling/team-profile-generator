const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name = "", id = 0, email = "",  github) {
        super(name, id, email);

        this.github = github;
        this.role = "Engineer";
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;
