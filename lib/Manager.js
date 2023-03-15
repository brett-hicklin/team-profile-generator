// pulls in Employee to be used with this class
const Employee = require('./Employee')

//class for Manager
class Manager extends Employee{
    constructor(name, id, email, officeNumber){
       super(name, id, email,);
       this.officeNumber = officeNumber;
    }
    getOfficeNumber(){
      return this.officeNumber
    }

    getRole(){
       return "Manager"
    }
   }
   //exports Manager to be used in other files
   module.exports = Manager;