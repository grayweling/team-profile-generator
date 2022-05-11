const Manager = require('../lib/Manager');

test("creates manager object", () => {
    const manager = new Manager("John", 1, "montblanc@kupomail.net", "324");

    expect(manager.name).toBe("John");
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe("montblanc@kupomail.net");
    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test("gets manager role", () => {
    const manager = new Manager("John", 1, "montblanc@kupomail.net", "324");

    expect(manager.getRole()).toBe("Manager");
})