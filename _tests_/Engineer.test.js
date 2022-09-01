const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "Leia Organa";
    const employeeInstance = new Engineer("Leia Organa", 2, "princessleia@starwars.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "Leia Organa";
    const employeeInstance = new Engineer("Leia Organa", 2, "princessleia@starwars.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Leia Organa", 2, "princessleia@starwars.com", "Leia Organa");
    expect(employeeInstance.getRole()).toBe(returnValue);
});