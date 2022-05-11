const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");
const Manager = require("../lib/Manager");

const generateManager = (managerData) => {
    return `
    <div class="card">
        <div class="card-header">
            <h2 class="card-title">
                ${managerData.getName()} <br/>
                <i class="fas fa-mug-hot"></i> ${managerData.getRole()}
            </h2>
            <div class="card-body">
                <p class="card-text">ID: ${managerData.getId()}</p>
                <p class="card-text">Email: <a href = "mailto: ${managerData.getEmail()}">${managerData.getEmail()}</a></p>
                <p class="card-text">Office Number: ${managerData.getOfficeNumber()}</p>
            </div>
        </div>`
}

const generateEmployees = (employeeData) => {
    return `
        ${employeeData
            .filter(({ github }) => github)
            .map(({ employeeType, name, id, email, github }) => {
                return `
                <div class="card">
                    <h2 class="card-title">
                        ${name}<br/>
                        <i class="bi bi-display"></i> ${employeeType}
                    </h2>
                    <div class="card-body">
                        <p class="card-text">ID: ${id}</p>
                        <p class="card-text">Email: <a href = "mailto: ${email}">${email}</a></p>
                        <p class="card-text">GitHub: <a href = "https://github.com/${github}" target = "_blank">${github}</a></p>
                    </div>
                </div>`;
            })}

                ${employeeData
                    .filter(({ school }) => school)
                    .map(({ employeeType, name, id, email, school }) => {
                        return `
                        <div class="card">
                            <h2 class="card-title">
                                ${name}<br/>
                                <i class="bi bi-school"></i> ${employeeType}
                            </h2>
                            <div class="card-body">
                                <p class="card-text">ID: ${id}</p>
                                <p class="card-text">Email: <a href = "mailto: ${email}">${email}</a></p>
                                <p class="card-text">School: ${school}</p>
                            </div>
                        </div>`;
                    })}
            `;
}

function generateHTML(answers) {
    const { name, id, email, officeNumber, ...employeesObject } = answers;
    let manager = new Manager(name, id, email, officeNumber);
    let employees = employeesObject.employees;

    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile</title>
    </head>
    
    <body>
        <header class="jumbotron">
            <h1 class="display-6 text=center">Team Profile</h1>
        </header>
        
        <main class="container">
            ${generateManager(manager)}
            ${generateEmployees(employees)}
        </main>
        
    </body>
    
    </html>`;
}

module.exports = generateHTML;