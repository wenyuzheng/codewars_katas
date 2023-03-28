const { dijkstraAll } = require("./dijkstraAll");
const { getGraph } = require("./getGraph");

const path_finder = (maze) => {
  const mazeArr = maze.split("\n").map((e) => e.split(""));
  const n = mazeArr.length - 1;
  const goalNode = `${n},${n}`;

  let graph = getGraph(maze);

  console.log(graph);
  graph = dijkstraAll(graph, "0,0");

  console.log(graph, { goalNode }, !graph[goalNode]);

  if (!graph[goalNode]) return false;
  return graph[goalNode].finalVal;
};

module.exports = { path_finder };
