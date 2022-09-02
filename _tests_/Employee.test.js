const Employee = require("../lib/Employee");

test("Testing name.", () => {
    const name = "Luke Skywalker";
    const newEmployee = new Employee(name);
    expect(newEmployee.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 2;
    const newEmployee = new Employee("Luke Skywalker", id);
    expect(newEmployee.id).toBe(id);
})

test("Testing email.", () => {
    const email = "lskywalker@starwars.com";
    const newEmployee = new Employee("Luke Skywalker", 2, email);
    expect(newEmployee.email).toBe(email);
});