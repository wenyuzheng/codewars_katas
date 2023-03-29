const { interpret } = require("../befunge_interpreter");

describe("Befunge Interpreter", () => {
  xit("simple 1", () => {
    const result = interpret(">987@");
    const expected = "";
    expect(result).toEqual(expected);
  });

  xit("simple 2", () => {
    const result = interpret(">987v>.v\n@456<");
    const expected = "";
    expect(result).toEqual(expected);
  });

  xit("simple 3", () => {
    const result = interpret(">98+.@");
    const expected = "17";
    expect(result).toEqual(expected);
  });

  it("simple 4", () => {
    const result = interpret(">9\\..@");
    const expected = "09";
    expect(result).toEqual(expected);
  });

  xit("eg 1", () => {
    const result = interpret(">987v>.v\nv456<  :\n>321 ^ _@");
    const expected = "123456789";
    expect(result).toEqual(expected);
  });
});
