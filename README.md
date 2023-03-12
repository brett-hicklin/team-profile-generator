# Team Profile Generator

  ## Description
  Using Inquirer, the app generates an HTML page to display your team members, to include a manager, engineers, and interns. The information it will display is based on what class they fall under, Manager, Engineer, or Intern. They will all at least display their name, id number, and email addresses. Other supplemental information indluded is as follows : for the manager - the office room number, for the Engineer - their github profile, and for the intern, the school they are attending

  ## Installation
  ```
  npm i
  ```
  
  ## Usage
  Run the command 
  ```
  node index.js
  ```
  When the app starts, you will enter the team manager's name, then their ID number, then their Email address, and finally their office room number. After that information is answered, you will then be asked if you'd like to add another employee, if yes is chosen then a new prompt will appear asking their role, either Engineer, or Intern. Select a role and follow the rest of the prompts asking their name, id number, and email. If an Engineer is selected then an additional question asking what their github username is will be asked. If an Intern is selected, then an addition question will ask what school they attend. After the last question of each role you will be prompted again if you'd like to add another employee. Once you are done, and select "No' then an HTML page is created titled "team.html" that displays all of the team members on individual cards with all their information.

a sample team.html is provided in this repo, as well as a link to watch a video [walkthrough](https://drive.google.com/file/d/1s5JZPckxjfUeG6ablq8x2wx8T1rW-AMO/view).
  ## Tests
  To run tests, run the following command:
  ```
  npm test
  ``` 
  