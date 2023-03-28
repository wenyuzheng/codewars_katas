const { dijkstraAll } = require("../lib/dijkstraAll");

describe("dijkstra all", () => {
  xit("eg 1", () => {
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
      "1,0": { neighbours: ["0,0"] },
      "1,2": { neighbours: ["0,2"] },
    };
    const result = dijkstraAll(graph, "0,0");
    expect(graph["1,2"].finalVal).toEqual(3);
    expect(graph["1,2"].workingVal).toEqual(3);
    expect(graph["1,0"].finalVal).toEqual(1);
    expect(graph["0,2"].finalVal).toEqual(2);
  });
});
