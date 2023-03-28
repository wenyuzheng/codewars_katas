const { dijkstraAll } = require("./dijkstraAll");

const path_finder = (maze) => {
  const mazeArr = maze.split("\n").map((e) => e.split(""));
  const n = mazeArr.length - 1;
  const startNode = "0,0";
  const goalNode = `${n},${n}`;

  const graph = dijkstraAll(maze, startNode);

  if (!graph[goalNode]) return false;
  return graph[goalNode].finalVal;
};

module.exports = { path_finder };
