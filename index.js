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
            console.log("Hello " + answer.user_name);
        });
    case "Intern":
    case "Manager":
    case "Engineer":
    default: 
        console.log("Please choose one of the following, Employee? Intern? Manager? Engineer?");
}
  });


console.log("who is the first team member? Employee? Intern? Manager? Engineer?");

