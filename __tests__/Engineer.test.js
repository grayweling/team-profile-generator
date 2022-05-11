const Engineer = require('../lib/Engineer');

test("create engineer object", () => {
    const engineer = new Engineer("John", 1, "boco@kweh.net", "chocobocolina");

    expect(engineer.name).toBe("John");
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe("boco@kweh.net");
    expect(engineer.github).toBe("chocobocolina");
})

test("gets engineer role", () => {
    const engineer = new Engineer("John", 1, "boco@kweh.net", "chocobocolina");

    expect(engineer.getRole()).toBe("Engineer");
})

test("gets engineer github", () => {
    const engineer = new Engineer("John", 1, "boco@kweh.net", "chocobocolina");

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
})