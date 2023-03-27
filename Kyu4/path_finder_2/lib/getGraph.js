const { getNeighbours } = require("../lib/getNeighbours");

const getGraph = (maze) => {
  let mazeArr = maze.split("\n").map((e) => e.split(""));

  const graph = {};

  for (let x = 0; x < mazeArr.length; x++) {
    for (let y = 0; y < mazeArr[x].length; y++) {
      if (mazeArr[x][y] === "W") continue;

      //   console.log({ x, y }, getNeighbours(mazeArr, x, y));

      graph[`${x},${y}`] = { neighbours: getNeighbours(mazeArr, x, y) };
    }
  }

  //   Object.keys(graph).forEach((e) => console.log({ e }, graph[e]));

  return graph;
};

module.exports = { getGraph };
