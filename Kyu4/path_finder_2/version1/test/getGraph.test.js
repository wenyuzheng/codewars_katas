const { getGraph } = require("../lib/getGraph");

describe("Get graph", () => {
  it("eg 1", () => {
    const maze = "...\n.W.";
    const result = getGraph(maze);
    expect(result["0,0"].neighbours).toEqual(["0,1", "1,0"]);
    expect(result["0,2"].neighbours).toEqual(["0,1", "1,2"]);
    expect(result["2,2"]).toEqual(undefined);
    expect(result["1,0"].neighbours).toEqual(["0,0"]);
  });

  it("eg 2", () => {
    const maze = "...\n.W.\n.WW\n.W.";
    const result = getGraph(maze);
    expect(result["0,0"].neighbours).toEqual(["0,1", "1,0"]);
    expect(result["0,2"].neighbours).toEqual(["0,1", "1,2"]);
    expect(result["2,0"].neighbours).toEqual(["3,0", "1,0"]);
    expect(result["3,2"].neighbours).toEqual([]);
  });

  it("eg 3", () => {
    const maze = `.W.
.W.
W..`;
    const result = getGraph(maze);
    console.log(result);
    expect(result["0,0"].neighbours).toEqual(["1,0"]);
    expect(result["0,2"].neighbours).toEqual(["1,2"]);
    expect(result["1,0"].neighbours).toEqual(["0,0"]);
    expect(result["1,2"].neighbours).toEqual(["2,2", "0,2"]);
    expect(result["2,1"].neighbours).toEqual(["2,2"]);
    expect(result["2,2"].neighbours).toEqual(["2,1", "1,2"]);
  });
});
