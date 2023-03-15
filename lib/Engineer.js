// pulls in Employee to be used with this class
const Employee = require('./Employee')

// class for Engineers
class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
    getGithub(){
        return this.github
    }

    getRole(){
        return "Engineer"
    }
}
//exports Engineer to be used in other files
module.exports = Engineer;
