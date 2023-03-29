const { interpret } = require("../befunge_interpreter");

console.log("9" === /[^0-9]/);

describe("Befunge Interpreter", () => {
  it("simple 1", () => {
    const result = interpret(">987@");
    const expected = "123456789";
    expect(result).toEqual(expected);
  });

  // it("eg 1", () => {
  //   const result = interpret(">987v>.v\nv456<  :\n>321 ^ _@");
  //   const expected = "123456789";
  //   expect(result).toEqual(expected);
  // });
});
