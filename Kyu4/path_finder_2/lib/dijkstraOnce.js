const dijkstraOnce = (graph, node) => {
  // Update working value of neighbours
  graph[node].neighbours.forEach((n) => {
    if (graph[n].workingVal === undefined) {
      graph[n].workingVal = 1 + graph[node].finalVal;
    } else {
      graph[n].workingVal = Math.min(
        graph[n].workingVal,
        1 + graph[node].finalVal
      );
    }
  });

  // Get all nodes with working value but no final value
  const nodesWithWorkingNoFinal = [];
  Object.keys(graph).forEach((k) => {
    if (graph[k].workingVal && !graph[k].finalVal && graph[k].finalVal !== 0) {
      nodesWithWorkingNoFinal.push([k, graph[k].workingVal]);
    }
  });

  // Find the node with the least working value
  const nextNode = nodesWithWorkingNoFinal.sort((a, b) => a[1] - b[1])[0][0];

  // Set the next node's finalVal
  graph[nextNode].finalVal = graph[nextNode].workingVal;

  return nextNode;
};

module.exports = { dijkstraOnce };
