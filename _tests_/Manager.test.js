const Manager = require("../lib/Manager");

test("Creating a number.", () => {
    const testNumber = 2;
    const newEmployee = new Manager("Han Solo", 2, "Jabasmells@starwars.com", testNumber);
    expect(newEmployee.officeNumber).toBe(testNumber);
});

test("Testing role.", () => {
    const returnValue = "Manager";
    const newEmployee = new Manager("Han Solo", 2, "Jabasmells@starwars.com", 2);
    expect(newEmployee.getRole()).toBe(returnValue);
});