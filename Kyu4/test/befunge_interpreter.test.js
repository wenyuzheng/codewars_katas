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

  xit("simple 4", () => {
    const result = interpret(">9\\..@");
    const expected = "09";
    expect(result).toEqual(expected);
  });

  xit("eg 1", () => {
    const result = interpret(">987v>.v\nv456<  :\n>321 ^ _@");
    const expected = "123456789";
    expect(result).toEqual(expected);
  });

  xit("eg 2", () => {
    const result = interpret("01->1# +# :# 0# g# ,# :# 5# 8# *# 4# +# -# _@");
    const expected = "01->1# +# :# 0# g# ,# :# 5# 8# *# 4# +# -# _@";
    expect(result).toEqual(expected);
  });

  it("eg 3", () => {
    const code =
      '2>:3g" "-!v\\  g30          <\n' +
      ' |!`"&":+1_:.:03p>03g+:"&"`|\n' +
      ' @               ^  p3\\" ":<\n' +
      "2 2345678901234567890123456789012345678";
    const result = interpret(code);
    const expected = "23571113171923293137";
    expect(result).toEqual(expected);
  });
});
