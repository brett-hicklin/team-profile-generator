const inquirer = require("inquirer");
const generateHTML = require('./src/generateHTML')

const managerQuestions = [
  {
    type: "input",
    message: "Enter the team manager's name",
    name: "managerName",
  },
  {
    type: "input",
    message: "What is their office room number?",
    name: "office",
  },
  {
    type: "input",
    message: "What is their name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is their ID number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is their email address?",
    name: "email",
  },
];

const employeeQuestions = [
  
  {
    type: "input",
    message: "What is their name?",
    name: "name",
    when: (answers) => answers.role === "Engineer",
  },
  {
    type: "input",
    message: "What is their ID number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is their email address?",
    name: "email",
  },
];


const internQuestions = [
  {
    type: "input",
    message: "What school do they attend?",
    name: "school",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "What is their GitHub username?",
    name: "username",
  },
];

 const addEmployeeConfirm = [
  {
    type: "confirm",
    message: "Would you like to add another employee?",
    name: "addEmployee",
  },
];

const addEmployeeRole = [
  {
  type: "list",
  message: "What is their role?",
  choices: ["Engineer", "Intern"],
  name: "role",
},
];
