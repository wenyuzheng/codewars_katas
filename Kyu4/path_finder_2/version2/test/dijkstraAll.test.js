const { dijkstraAll } = require("../lib/dijkstraAll");

describe("dijkstra all", () => {
  it("eg 1", () => {
    const maze = "...\n.W.\n.W.";
    const result = dijkstraAll(maze, "0,0");
    expect(result["2,2"].finalVal).toEqual(4);
    expect(result["1,2"].workingVal).toEqual(3);
    expect(result["1,0"].finalVal).toEqual(1);
    expect(result["0,2"].finalVal).toEqual(2);
  });

  it("eg 2", () => {
    const maze = ".W.\n.W.\n.W.";
    const result = dijkstraAll(maze, "0,0");
    expect(result["2,2"]).toEqual(undefined);
    expect(result["1,2"]).toEqual(undefined);
    expect(result["1,0"].finalVal).toEqual(1);
    expect(result["2,0"].finalVal).toEqual(2);
  });
});
