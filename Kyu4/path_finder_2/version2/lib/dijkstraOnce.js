const { getNeighbours } = require("./getNeighbours");

const dijkstraOnce = (mazeArr, graph, stack, node) => {
  const [x, y] = node.split(",").map((e) => parseInt(e));
  const neighbours = getNeighbours(mazeArr, x, y);

  // Update working value of neighbours
  neighbours.forEach((n) => {
    if (graph[n] === undefined) {
      graph[n] = { workingVal: 1 + graph[node].finalVal };
    } else if (graph[n].finalVal !== undefined) return;
    else {
      graph[n].workingVal = Math.min(
        graph[n].workingVal,
        1 + graph[node].finalVal
      );
    }
    stack.push([n, graph[n].workingVal]);
  });

  if (stack.length > 0) {
    // Find the node with the least working value
    stack = stack.sort((a, b) => a[1] - b[1]);
    const nextNode = stack.shift()[0];

    // Set the next node's finalVal
    graph[nextNode].finalVal = graph[nextNode].workingVal;

    return nextNode;
  }
};

module.exports = { dijkstraOnce };
