const { dijkstraAll } = require("./dijkstraAll");
const { getGraph } = require("./getGraph");

const path_finder = (maze) => {
  const mazeArr = maze.split("\n").map((e) => e.split(""));
  const n = mazeArr.length - 1;
  const goalNode = `${n},${n}`;

  let graph = getGraph(maze);
  graph = dijkstraAll(graph, "0,0");

  if (!graph[goalNode].finalVal) return false;
  return graph[goalNode].finalVal;
};

module.exports = { path_finder };
