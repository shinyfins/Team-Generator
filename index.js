#!/usr/bin/env node
const fs = require("fs");
const inquirer = require("inquirer");


const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

employees=[];
// finished = false
// while(!finished){


function _prompt() {
    inquirer.prompt([
    {
      name: "type",
      type: "list",
      message: "Type of employee?",
      choices: ["Intern", "Manager", "Engineer", "No more"],
    },
  ])
  .then((answer) => {
      switch (answer.type) {
    case "Manager":
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
            },
            {
                name: "Office_Number",
                type: "number",
                message: "What is the Manager office number?"
            }

            
        ])
        .then((answer) => {
            employees.push(new Manager(answer.name, answer.ID, answer.Email, answer.Office_Number));
            _prompt();
        });
        break;

    case "Intern":
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
            },
            {
            name: "School",
            type: "input",
            message: "What is the Interns School?"
            }
            
        ])
        .then((answer) => {
            employees.push(new Intern(answer.name, answer.ID, answer.Email, answer.School));
            _prompt();
        });
        break;
    case "Engineer":
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
            },
            {
                name: "Github",
                type: "input",
                message: "What is their Github?"
            }
            
        ])
        .then((answer) => {
            employees.push(new Engineer(answer.name, answer.ID, answer.Email, answer.Github));
            _prompt();
        });
        break;
         case "No more":
            fs.writeFile("./employees.json", JSON.stringify(employees), err=>{
                if(err){
                    console.log(err);
                }
            });

            break;
         
      
}
  });
}
_prompt();

