const Intern = require("../lib/Intern");

test("Testing name.", () => {
    const name = "Chewbacca";
    const newEmployee = new Employee(name);
    expect(newEmployee.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 2;
    const newEmployee = new Employee("Chewbacca", id);
    expect(newEmployee.id).toBe(id);
})

test("Testing email.", () => {
    const email = "Hairywookieiam@starwars.com";
    const newEmployee = new Employee("Chewbacca", 2, email);
    expect(newEmployee.email).toBe(email);
});