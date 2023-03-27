const { getNeighbours } = require("../getNeighbours");

describe("Get neighbours", () => {
  it("eg 1", () => {
    const maze = "...".split("\n").map((e) => e.split(""));

    expect(getNeighbours(maze, 0, 0)).toEqual(["0,1"]);
    expect(getNeighbours(maze, 0, 1)).toEqual(["0,2", "0,0"]);
    expect(getNeighbours(maze, 0, 2)).toEqual(["0,1"]);
  });

  it("eg 2", () => {
    const maze = "...\n...".split("\n").map((e) => e.split(""));

    expect(getNeighbours(maze, 0, 0)).toEqual(["0,1", "1,0"]);
    expect(getNeighbours(maze, 0, 1)).toEqual(["0,2", "0,0", "1,1"]);
    expect(getNeighbours(maze, 0, 2)).toEqual(["0,1", "1,2"]);
    expect(getNeighbours(maze, 1, 0)).toEqual(["1,1", "0,0"]);
    expect(getNeighbours(maze, 1, 1)).toEqual(["1,2", "1,0", "0,1"]);
    expect(getNeighbours(maze, 1, 2)).toEqual(["1,1", "0,2"]);
  });

  it("eg 3", () => {
    const maze = "...\n...\n.W.".split("\n").map((e) => e.split(""));

    expect(getNeighbours(maze, 0, 0)).toEqual(["0,1", "1,0"]);
    expect(getNeighbours(maze, 0, 1)).toEqual(["0,2", "0,0", "1,1"]);
    expect(getNeighbours(maze, 0, 2)).toEqual(["0,1", "1,2"]);
    expect(getNeighbours(maze, 1, 0)).toEqual(["1,1", "2,0", "0,0"]);
    expect(getNeighbours(maze, 1, 1)).toEqual(["1,2", "1,0", "0,1"]);
    expect(getNeighbours(maze, 1, 2)).toEqual(["1,1", "2,2", "0,2"]);
    expect(getNeighbours(maze, 2, 0)).toEqual(["1,0"]);
    expect(getNeighbours(maze, 2, 2)).toEqual(["1,2"]);
  });
});
