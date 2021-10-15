const { Lizzy2, childOf, GeorgeVI } = require("./RoyalFamily");

describe("RoyalFamily", () => {
  test("It should say the name of the object", () => {
    expect(Lizzy2.name).toBe("Elizabeth II");
  });
  test("Testing functions", () => {
    expect(typeof childOf(Lizzy2)).toBe("object");
  });

  test("Testing functions 2", () => {
    expect(typeof childOf(GeorgeVI)).toBe("undefined");
  });
});
