const Manager = require("../lib/Manager");

test("Testing name.", () => {
    const name = "Han Solo";
    const newEmployee = new Manager(name);
    expect(newEmployee.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 2;
    const newEmployee = new Manager("Han Solo", id);
    expect(newEmployee.id).toBe(id);
})

test("Testing email.", () => {
    const email = "Jabasmells@starwars.com";
    const newEmployee = new Manager("Han Solo", 2, email);
    expect(newEmployee.email).toBe(email);
});