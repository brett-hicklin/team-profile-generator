const Employee = require("../lib/Employee.js")

describe('Employee',() =>{
    describe('getName',()=>{
        test('it should return the name of the employee',()=>{
            const employee = new Employee("brett","04","test@test.com");
            const name = employee.getName();
            expect(name).toBe("brett");
        })
    })


    describe('getId',()=>{
        test('it should return the ID of the employee',()=>{
            const employee = new Employee("brett","04","test@test.com");
            const id = employee.getId();
            expect(id).toBe("04");
        })
    })

    describe('getEmail',()=>{
        test('it should return the Email of the employee',()=>{
            const employee = new Employee("brett","04","test@test.com");
            const email = employee.getEmail();
            expect(email).toBe("test@test.com");
        })
    })

    describe('getRole',()=>{
        test('it should return the string "Employee"',()=>{
            const employee = new Employee("brett","04","test@test.com");
            const role = employee.getRole();
            expect(role).toBe("Employee");

        })

    })
})