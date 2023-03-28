const { getGraph } = require("../lib/getGraph_v2");

describe("get graph v2", () => {
  it("eg 1", () => {
    const maze = "...\n.W.";
    const result = getGraph(maze, "0,0");
    expect(result["0,0"].neighbours).toEqual(["0,1", "1,0"]);
    expect(result["0,2"].neighbours).toEqual(["0,1", "1,2"]);
    expect(result["2,2"]).toEqual(undefined);
    expect(result["1,0"].neighbours).toEqual(["0,0"]);
  });

  it("eg 2", () => {
    const maze = ".W.\n.W.";
    const result = getGraph(maze, "0,0");
    expect(result["0,0"].neighbours).toEqual(["1,0"]);
    expect(result["1,0"].neighbours).toEqual(["0,0"]);
    expect(result["0,2"]).toEqual(undefined);
    expect(result["1,2"]).toEqual(undefined);
  });

  it("eg 3", () => {
    const maze = ".W.\n.W.";
    const result = getGraph(maze, "0,0");
    expect(result["0,0"].neighbours).toEqual(["1,0"]);
    expect(result["1,0"].neighbours).toEqual(["0,0"]);
    expect(result["0,2"]).toEqual(undefined);
    expect(result["1,2"]).toEqual(undefined);
  });
});
