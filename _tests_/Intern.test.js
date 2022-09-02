const Intern = require("../lib/Intern");

test("Testing officeNumber", () => {
    const officeNumber = "Number";
    const newEmployee = new Intern("Chewbaca", 2, "Hairywookieiam@starwars.com", officeNumber);
    expect(newEmployee.officeNumber()).toBe(officeNumber);
});


test("Testing school.", () => {
    const testSchool = "School Name";
    const newEmployee = new Intern("Chewbacca", 2, "Hairywookieiam@starwars.com", testSchool);
    expect(newEmployee.school).toBe(testSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const newEmployee = new Intern("Chewbacca", 2, "Hairywookieiam@starwars.com", "School Name");
    expect(newEmployee.getRole()).toBe(returnValue);
});