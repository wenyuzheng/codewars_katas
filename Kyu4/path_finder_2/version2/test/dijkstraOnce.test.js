const { dijkstraOnce } = require("../lib/dijkstraOnce");

describe("dijkstra once", () => {
  it("eg 1", () => {
    const maze = "...\n.W.\n.W.".split("\n").map((e) => e.split(""));

    const graph = {};
    graph["0,0"] = { finalVal: 0 };

    const result = dijkstraOnce(maze, graph, [], "0,0");
    expect(result).toEqual("0,1");
  });

  it("eg 2", () => {
    const maze = ".W.\nW..\n.W.".split("\n").map((e) => e.split(""));

    const graph = {};
    graph["0,0"] = { finalVal: 0 };

    const result = dijkstraOnce(maze, graph, [], "0,0");
    expect(result).toEqual(undefined);
  });
});
