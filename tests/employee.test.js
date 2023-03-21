const Employee = require('../lib/Employee');

describe("Employee", () => {
    const name = "Chris";
    const id = "519";
    const email = "chriscota@gmail.com";
    const test = { name, id, email }

    const employee = new Employee(test);

    it("Should return the Name", () => {
        expect(employee.getName()).toEqual(name);
    });
    it("Should return the ID", () => {
        expect(employee.getId()).toEqual(id);
    });
    it("Should return the Email", () => {
        expect(employee.getEmail()).toEqual(email);
    });
})