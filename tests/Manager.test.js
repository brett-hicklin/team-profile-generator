const Manager = require("../lib/Manager.js")

describe('Manager',() =>{
    describe('getOfficeNumber',()=>{
        test('it should return the office number',()=>{
            const manager = new Manager("brett","01","test@test.com","221");
            const officeNumber = manager.getOfficeNumber();
            expect(officeNumber).toBe("221");
        })
    })

    describe('getRole',()=>{
        test('it should return the string manager',()=>{
            const manager = new Manager("brett","01","test@test.com","221");
            const role = manager.getRole();
            expect(role).toBe("Manager");

        })

    })
})