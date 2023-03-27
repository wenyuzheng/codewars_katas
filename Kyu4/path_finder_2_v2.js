export function pathFinder(maze) {
  let mazeArr = maze.split("\n").map((e) => e.split(""));

  const n = mazeArr.length - 1;

  const graph = getGraph(mazeArr);

  // console.log({ graph });
  // Object.keys(graph).forEach((e) => console.log({ e }, graph[e]));

  return dijkstra(graph, `${n},${n}`);
}

export const getGraph = (mazeArr) => {
  const graph = {};

  for (let x = 0; x < mazeArr.length; x++) {
    for (let y = 0; y < mazeArr[0].length; y++) {
      if (mazeArr[x][y] === "W") continue;

      let neighbours = [];

      // Check right
      if (y + 1 <= mazeArr[0].length - 1 && mazeArr[x][y + 1] === ".") {
        neighbours.push(`${x},${y + 1}`);
      }
      // Check left
      if (y - 1 >= 0 && mazeArr[x][y - 1] === ".") {
        neighbours.push(`${x},${y - 1}`);
      }
      // Check down
      if (x + 1 <= mazeArr.length - 1 && mazeArr[x + 1][y] === ".") {
        neighbours.push(`${x + 1},${y}`);
      }
      // Check up
      if (x - 1 >= 0 && mazeArr[x - 1][y] === ".") {
        neighbours.push(`${x - 1},${y}`);
      }

      graph[`${x},${y}`] = {
        neighbours,
      };
    }
  }

  // Object.keys(graph).forEach((e) => console.log({ e }, graph[e]));

  return graph;
};

const update = (node, graph) => {
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
  console.log({ graph });

  // Get all nodes with working value but no final value
  const nodesWithWorkingNoFinal = {};
  Object.keys(graph).forEach((k) => {
    if (graph[k].workingVal && !graph[k].finalVal && graph[k].finalVal !== 0) {
      nodesWithWorkingNoFinal[k] = graph[k];
    }
  });
  console.log({ nodesWithWorkingNoFinal });

  // Pick the node with least working value and repeat
  if (Object.keys(nodesWithWorkingNoFinal).length !== 0) {
    let min = null;
    Object.keys(nodesWithWorkingNoFinal).forEach((node) => {
      if (!min || graph[min].workingVal <= graph[node].workingVal) {
        min = node;
      }
    });
    graph[min].finalVal = graph[min].workingVal;

    update(min, graph);
  }
};

export const dijkstra = (graph, goal) => {
  // Initialise
  graph["0,0"].finalVal = 0;

  // Update dijkstra graph
  update("0,0", graph);

  // console.log({ graph });

  return graph;

  // console.log({ graph });

  // if (!graph[goal].workingVal) return false;
  // return graph[goal].finalVal;
};
