const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

inquirer.prompt([
    {
      name: "type",
      type: "list",
      message: "Which employee first?",
      choices: ["Employee", "Intern", "Manager", "Engineer"],
    },
  ])
  .then((answer) => {
      switch (answer.type) {
    case "Employee":
        inquirer
        .prompt([
            {
            name: "name",
            type: "input",
            message: "What is your name?",
            },

            {
            name: "ID",
            type: "number",
            message:  "What is the Employee's ID?"
            },

            {
            name: "Email",
            type: "input",
            message:  "What is the Employee's Email?"
            }
            
        ])
        .then((answer) => {
            employee = new Employee(answer.name, answer.ID, answer.Email)
        });
    case "Intern":
    case "Manager":
    case "Engineer":
    default: 
      
}
  });


