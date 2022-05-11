const Employee = require('../lib/Employee');

test("creates employee object", () => {
    const employee = new Employee("John", 1, "john@kupomail.net");

    expect(employee.name).toBe("John");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe("john@kupomail.net");
})

test("gets employee name", () => {
    const employee = new Employee("John", 1, "john@kupomail.net");

    expect(employee.getName()).toBe("John");
})

test("gets employee id", () => {
    const employee = new Employee("John", 1, "john@kupomail.net");

    expect(employee.getId()).toEqual(expect.any(Number));
})

test("gets employee email", () => {
    const employee = new Employee("John", 1, "john@kupomail.net");

    expect(employee.getEmail()).toEqual(
        expect.stringContaining(employee.email.toString())
    )
})

test("gets employee role", () => {
    const employee = new Employee("John", 1, "john@kupomail.net");

    expect(employee.getRole()).toBe("Employee");
})