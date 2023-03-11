const inquirer = require("inquirer");
const generateHTML = require('./src/generateHTML')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const managerQuestions = [
  {
    type: "input",
    message: "Enter the team manager's name",
    name: "managerName",
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
  {
    type: "input",
    message: "What is their office room number?",
    name: "office",
  },
];

const internQuestions = [
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
  {
    type: "input",
    message: "What school do they attend?",
    name: "school",
  },
];

const engineerQuestions = [
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
  {
    type: "list",
    message: "What is their role?",
    choices: ["Engineer", "Intern"],
    name: "role",
    when: (answer) => answer.addEmployee === 'y'
  },
];
// do something when they say no to add employee
function userPrompts() {
  inquirer.prompt(managerQuestions).then((data) => {
    const manager = new Manager(
      data.managerName,
      data.id,
      data.email,
      data.office
    );

    const engineerArr = [];
    const internArr = [];

    let isAddingEmployee= true;
    while (isAddingEmployee) {
      inquirer.prompt(addEmployeeConfirm).then((data) => {
        if (data.addEmployee) {

          //create a new div
          if (data.role === "Engineer") {
            inquirer.prompt(engineerQuestions).then((data) => {
              const engineer = new Engineer(
                data.name,
                data.id,
                data.email,
                data.username
              );
              engineerArr.push(engineer);
            });
          } else if (data.role === "Intern") {
            inquirer.prompt(internQuestions).then(() => {});
          }
        } else { 
          isAddingEmployee = false
          //add something to take of false condition
        }
      });
    }
    writeToFile("index.html", data);
  });
}

function writeToFile(fileName, data) {
  const htmlDoc = generateHTML.generateHTML(data);

  fs.writeFile(fileName, `${htmlDoc}`, (err) => {
    err
      ? console.error(err)
      : console.log("You've successfully created a team profile");
  });
}

userPrompts();