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

    promptEmployee(teamData) {
        if (!teamData.employees) {
            teamData.employees = [];
        }

        console.log("\nAdd an employee:\n");

        return inquirer.prompt([
            {
                type: "list",
                name: "employeeType",
                message: "What type of employee would you like to add?",
                choices: ["Engineer", "Intern"]
            },
            {
                type: "input",
                name: "name",
                message: "What is the employee's name?",
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
                message: "What is the employee's ID number?",
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
                message: "What is the employee's email address?",
                validate: (emailInput) => {
                    if (emailInput === "") {
                        return "Please enter an email address.";
                    }
                    return true;
                }
            },
            {
                type: "input",
                name: "github",
                message: "What is the employee's GitHub username?",
                validate: (githubInput) => {
                    if (githubInput === "") {
                        return "Please enter a GitHub username.";
                    }
                    return true;
                },
                when: (answers) => {
                    return answers.employeeType === "Engineer";
                }
            },
            {
                type: "input",
                name: "school",
                message: "What is the employee's school?",
                validate: (schoolInput) => {
                    if (schoolInput === "") {
                        return "Please enter a school.";
                    }
                    return true;
                },
                when: (answers) => {
                    return answers.employeeType === "Intern";
                }
            },
            {
                type: "confirm",
                name: "addEmployee",
                message: "Would you like to add another employee?",
                default: false
            }
        ])
        .then((employeeData) => {
            teamData.employees.push(employeeData);
            if (employeeData.addEmployee) {
                return new Prompt().promptEmployee(teamData);
            } else {
                return teamData;
            }
        })
    }
}

module.exports = Prompt;