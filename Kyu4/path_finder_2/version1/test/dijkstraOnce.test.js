const { dijkstraOnce } = require("../lib/dijkstraOnce");

describe("dijkstra once", () => {
  it("eg 1", () => {
    const graph = {
      "0,0": { neighbours: ["0,1", "1,0"], finalVal: 0 },
      "0,1": { neighbours: ["0,0", "0,2"] },
      "0,2": { neighbours: ["0,1", "1,2"] },
      "1,0": { neighbours: ["0,0"] },
      "1,2": { neighbours: ["0,2"] },
    };
    const result = dijkstraOnce(graph, "0,0");
    expect(result).toEqual("0,1");
    expect(graph["0,1"].finalVal).toEqual(1);
    expect(graph["0,1"].workingVal).toEqual(1);
    expect(graph["1,0"].workingVal).toEqual(1);
  });

  it("eg 2", () => {
    const graph = {
      A: { neighbours: ["B", "C", "D"], finalVal: 5 },
      B: { neighbours: ["A"], finalVal: 3, workingVal: 3 },
      C: { neighbours: ["A"], workingVal: 7 },
      D: { neighbours: ["A"], workingVal: 3 },
      //   E: { neighbours: ["B"], workingVal: 2 },
    };

    const result = dijkstraOnce(graph, "A");

    expect(result).toEqual("D");
    expect(graph["D"].finalVal).toEqual(3);
    expect(graph["D"].workingVal).toEqual(3);
    expect(graph["C"].workingVal).toEqual(6);
  });
});
