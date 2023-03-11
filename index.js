const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require('./src/generateHTML')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

let isAddingEmployee= true;
const engineerArr = [];
const internArr = [];
let manager;
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
    when: (answer) => answer.addEmployee === true
  },
];
function promptEmployee(){
  return inquirer.prompt(addEmployeeConfirm).then((data) => {
    
    if (data.addEmployee) {

      //create a new div
      if (data.role === "Engineer") {
        return inquirer.prompt(engineerQuestions).then((data) => {
          const engineer = new Engineer(
            data.name,
            data.id,
            data.email,
            data.username
          );
          engineerArr.push(engineer);
         
        });
      } else if (data.role === "Intern") {
        return inquirer.prompt(internQuestions).then((data) => {
          const intern = new Intern(
            data.name, 
            data.id, 
            data.email, 
            data.school
          );
          internArr.push(intern);
        });
      }
    } else { 
      isAddingEmployee = false
      return Promise.resolve();
     
    }
  } 
  ).then(()=>{
    if (isAddingEmployee){
      return promptEmployee();
    }
  })

}

function userPrompts() {
  return inquirer.prompt(managerQuestions).then((data) => {
     manager = new Manager(
      data.managerName,
      data.id,
      data.email,
      data.office
    );
    
      return promptEmployee();


  });
}

function writeToFile() {
 
  const htmlDoc = generateHTML.generateHTML(manager, engineerArr, internArr);


  fs.writeFile("team.html", `${htmlDoc}`, (err) => {
    err
      ? console.error(err)
      : console.log("You've successfully created a team profile");
  });
}

userPrompts().then(()=> {
  writeToFile();
});