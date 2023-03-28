const { getNeighbours } = require("./getNeighbours");

const getNodePosition = (node) => {
  return node.split(",").map((e) => parseInt(e));
};

const getGraph = (maze, startNode) => {
  const mazeArr = maze.split("\n").map((e) => e.split(""));

  const graph = {};
  const stack = [startNode];

  while (stack.length !== 0) {
    const node = stack.shift();
    const [x, y] = getNodePosition(node);

    const neighbours = getNeighbours(mazeArr, x, y);
    graph[node] = { neighbours };

    const newNeighbours = neighbours.filter((n) => graph[n] === undefined);
    stack.push(...newNeighbours);
  }

  console.log(graph);

  return graph;
};

module.exports = { getGraph };
