//pulling in all my required files 
const fs = require("fs");
const inquirer = require("inquirer");
const generateHTML = require('./src/generateHTML')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

//setting a boolean to check to see if the user wants to add a new employee
let isAddingEmployee= true;
//sets empty arrays to add as many employees as the user would like
const engineerArr = [];
const internArr = [];
let manager;
//array of questions to be asked about the manager
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
//list of questions about interns
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
//list of questions about engineers
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
//list of questions asking about the addition of other employees to the team
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
// prompt employee is the function that runs inquirer and adds team info to arrays as well as collect the information from the user
function promptEmployee(){
  return inquirer.prompt(addEmployeeConfirm).then((data) => {
    
    if (data.addEmployee) {

      
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
// function that asks the first questions relating to the manager and gets the information from the user
function managerPrompts() {
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
//writes the HTML file to display the team profile
function writeToFile() {
 
  const htmlDoc = generateHTML.generateHTML(manager, engineerArr, internArr);


  fs.writeFile("team.html", `${htmlDoc}`, (err) => {
    err
      ? console.error(err)
      : console.log("You've successfully created a team profile");
  });
}

managerPrompts().then(()=> {
  writeToFile();
});