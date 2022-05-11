const inquirer = require('inquirer');

class Prompt {
    promptManager() {
        console.log ("\nWelcome to the Employee Manager!\n");

        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is the team manager's name?",
                validate: (nameInput) => {
                    if (nameInput === "") {
                        return "Please enter a name.";
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the team manager's ID number?",
                validate: (idInput) => {
                    let id = parseInt(idInput);
                    if (isNaN(id)) {
                        return "Please enter a number.";
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the team manager's email address?",
                validate: (emailInput) => {
                    if (emailInput === "") {
                        return "Please enter an email address.";
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the team manager's office number?",
                validate: (officeNumberInput) => {
                    let officeNumber = parseInt(officeNumberInput);

                    if (isNaN(officeNumber)) {
                        return "Please enter a number.";
                    }
                    return true;
                }
            }
        ])
    }
}

module.exports = Prompt;