const { dijkstraOnce } = require("./dijkstraOnce");

const dijkstraAll = (graph, startNode) => {
  // Initialise
  graph[startNode].finalVal = 0;

  let nextNode = dijkstraOnce(graph, startNode);
  while (nextNode !== undefined) {
    nextNode = dijkstraOnce(graph, nextNode);
  }

  return graph;
};

module.exports = { dijkstraAll };
