
const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');


describe("Engineer", () => {
    const name = "Chris";
    const id = "901";
    const email = "ChrisCota@gmail.com";
    const github = "chriscota";
    const test = { name, id, email, github };

    const engineer = new Engineer(test);


    test("Should pass the Name value", () => {
        expect(engineer.getName()).toEqual("Chris");
    });
    test("Should return the ID value", () => {
        expect(engineer.getID()).toEqual("901");
    });
    test("Should return the Email value", () => {
        expect(engineer.getEmail()).toEqual("ChrisCota@gmail.com");
    });
    test("Should return the github value", () => {
        expect(engineer.getGithub()).toEqual("chriscota");
    });
    test("Should return the Engineer for getRole method", () => {
        expect(engineer.getRole()).toEqual("Engineer");
    });

});