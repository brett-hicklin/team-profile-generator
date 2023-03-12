const Engineer = require("../lib/Engineer.js")

describe('Engineer',() =>{
    describe('getGithub',()=>{
        test('it should return the Github username',()=>{
            const engineer = new Engineer("brett","03","test@test.com","brett-hicklin");
            const github = engineer.getGithub();
            expect(github).toBe("brett-hicklin");
        })
    })

    describe('getRole',()=>{
        test('it should return the string "Engineer"',()=>{
            const engineer = new Engineer("brett","03","test@test.com","brett-hicklin");
            const role = engineer.getRole();
            expect(role).toBe("Engineer");

        })

    })
})