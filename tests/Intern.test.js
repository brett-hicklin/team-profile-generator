const Intern = require("../lib/Intern.js")

describe('Intern',() =>{
    describe('getSchool',()=>{
        test('it should return the school of the intern',()=>{
            const intern = new Intern("brett","02","test@test.com","UNH");
            const school = intern.getSchool();
            expect(school).toBe("UNH");
        })
    })

    describe('getRole',()=>{
        test('it should return the string "Intern"',()=>{
            const intern = new Intern("brett","02","test@test.com","UNH");
            const role = intern.getRole();
            expect(role).toBe("Intern");

        })

    })
})