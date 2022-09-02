const Engineer = require("../lib/Engineer");

test("Testing name.", () => {
    const name = "Leia Organa";
    const newEmployee = new Engineer(name);
    expect(newEmployee.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 2;
    const newEmployee = new Engineer("Leia Organa", id);
    expect(newEmployee.id).toBe(id);
})

test("Testing email.", () => {
    const email = "princessleia@starwars.com";
    const newEmployee = new Engineer("Leia Organa", 2, email);
    expect(newEmployee.email).toBe(email);
});