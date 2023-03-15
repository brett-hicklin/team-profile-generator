//class for Employees
class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email
    }

    getRole(){
        return "Employee"
    }
}
//exports Employee to be used in other files
module.exports = Employee;