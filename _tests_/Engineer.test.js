const Engineer = require("../lib/Engineer");

test("Can create an office number.", () => {
    const testNumber = 2;
    const newEmployee = new Engineer("Luke Skywalker", 2, "Jabasmells@starwars.com", testOfficeNumber);
    expect(newEmployee.officeNumber).toBe(testNumber);
});


test("Testing role.", () => {
    const returnValue = "Manager";
    const newEmployee = new Engineer("Luke Skywalker", 2, "Jabasmells@starwars.com", 2);
    expect(newEmployee.getRole()).toBe(returnValue);
});