const { dijkstraOnce } = require("./dijkstraOnce");

const dijkstraAll = (maze, startNode, goalNode) => {
  const mazeArr = maze.split("\n").map((e) => e.split(""));

  // Initialise
  const stack = [];
  const [startX, startY] = startNode.split(",").map((e) => parseInt(e));
  const graph = {};
  graph[`${startX},${startY}`] = { finalVal: 0 };

  // Dijkstra
  let nextNode = dijkstraOnce(mazeArr, graph, stack, startNode);
  while (nextNode !== undefined) {
    if (graph[goalNode] && graph[goalNode].finalVal) return graph;
    nextNode = dijkstraOnce(mazeArr, graph, stack, nextNode);
  }

  return graph;
};

module.exports = { dijkstraAll };
