const Intern = require('../lib/Intern');

test("create intern object", () => {
    const intern = new Intern("John", 1, "kweh@chocomart.com", "Gubal");

    expect(intern.name).toBe("John");
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe("kweh@chocomart.com");
    expect(intern.school).toBe("Gubal");
})

test("gets intern role", () => {
    const intern = new Intern("John", 1, "kweh@chocomart.com", "Gubal");

    expect(intern.getRole()).toBe("Intern");
})

test("gets intern school", () => {
    const intern = new Intern("John", 1, "kweh@chocomart.com", "Gubal");

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
})
