const { dijkstraAll } = require("../lib/dijkstraAll");

describe("dijkstra all", () => {
  it("eg 1", () => {
    const graph = {
      "0,0": { neighbours: ["0,1", "1,0"], finalVal: 0 },
      "0,1": { neighbours: ["0,0", "0,2"] },
      "0,2": { neighbours: ["0,1", "1,2"] },
      "1,0": { neighbours: ["0,0"] },
      "1,2": { neighbours: ["0,2"] },
    };
    const result = dijkstraAll(graph, "0,0");
    expect(graph["1,2"].finalVal).toEqual(3);
    expect(graph["1,2"].workingVal).toEqual(3);
    expect(graph["1,0"].finalVal).toEqual(1);
    expect(graph["0,2"].finalVal).toEqual(2);
  });

  it("eg 2", () => {
    const graph = {
      "0,0": { neighbours: ["0,1", "1,0"], finalVal: 0 },
      "0,1": { neighbours: ["0,0", "0,2"] },
      "0,2": { neighbours: ["0,1", "1,2"] },
      "1,0": { neighbours: ["0,0", "2,0"] },
      "1,2": { neighbours: ["0,2", "2,2"] },
      "2,0": { neighbours: ["1,0", "3,0"] },
      "2,2": { neighbours: ["1,2", "3,2"] },
      "3,0": { neighbours: ["2,0"] },
      "3,2": { neighbours: ["2,2"] },
    };
    const result = dijkstraAll(graph, "0,0");
    expect(result).toEqual({
      "0,0": { neighbours: ["0,1", "1,0"], finalVal: 0 },
      "0,1": { neighbours: ["0,0", "0,2"], workingVal: 1, finalVal: 1 },
      "0,2": { neighbours: ["0,1", "1,2"], workingVal: 2, finalVal: 2 },
      "1,0": { neighbours: ["0,0", "2,0"], workingVal: 1, finalVal: 1 },
      "1,2": { neighbours: ["0,2", "2,2"], workingVal: 3, finalVal: 3 },
      "2,0": { neighbours: ["1,0", "3,0"], workingVal: 2, finalVal: 2 },
      "2,2": { neighbours: ["1,2", "3,2"], workingVal: 4, finalVal: 4 },
      "3,0": { neighbours: ["2,0"], workingVal: 3, finalVal: 3 },
      "3,2": { neighbours: ["2,2"], workingVal: 5, finalVal: 5 },
    });
    expect(graph["2,0"].finalVal).toEqual(2);
    expect(graph["3,2"].finalVal).toEqual(5);
  });
});
