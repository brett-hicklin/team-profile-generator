// pulls in Employee to be used with this class
const Employee = require('./Employee')
//class for Interns
class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    getSchool(){
        return this.school
    }

    getRole(){
        return "Intern"
    }
}
//exports Intern to be used in other files
module.exports = Intern;