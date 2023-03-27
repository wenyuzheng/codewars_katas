export function pathFinder(maze) {
  let mazeArr = maze.split("\n").map((e) => e.split(""));

  const graph = {};

  for (let x = 0; x < mazeArr.length; x++) {
    for (let y = 0; y < mazeArr.length; y++) {
      if (mazeArr[x][y] === "W") continue;

      let neighbours = [];

      // Check right
      if (x + 1 <= mazeArr.length - 1 && mazeArr[x + 1][y] === ".") {
        // neighbours.push([x + 1, y]);
        neighbours.push(`${x + 1},${y}`);
      }
      // Check left
      if (x - 1 >= 0 && mazeArr[x - 1][y] === ".") {
        // neighbours.push([x - 1, y]);
        neighbours.push(`${x - 1},${y}`);
      }
      // Check down
      if (y + 1 <= mazeArr.length - 1 && mazeArr[x][y + 1] === ".") {
        // neighbours.push([x, y + 1]);
        neighbours.push(`${x},${y + 1}`);
      }
      // Check up
      if (y - 1 >= 0 && mazeArr[x][y - 1] === ".") {
        // neighbours.push([x, y - 1]);
        neighbours.push(`${x},${y - 1}`);
      }

      graph[`${x},${y}`] = {
        neighbours,
      };
    }
  }

  return dijkstra(graph);
}

const update = (node, graph) => {
  console.log({ node });

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

  // Pick the node with least working value
  if (Object.keys(nodesWithWorkingNoFinal).length !== 0) {
    let min = null;
    Object.keys(nodesWithWorkingNoFinal).forEach((node) => {
      if (!min || graph[min].workingVal <= graph[node].workingVal) {
        min = node;
      }
    });
    graph[min].finalVal = graph[min].workingVal;

    console.log({ graph });

    update(min, graph);
  }

  // return graph;
};

const dijkstra = (graph) => {
  graph["0,0"].finalVal = 0;

  update("0,0", graph);

  // const newGraph = update("0,0", graph);
  // console.log({ graph }, graph["2,2"].finalVal);

  // if (!graph["2,2"]) return false;
  return graph["2,2"].finalVal;
};

// export function pathFinder(maze) {
//   let mazeArr = maze.split("\n").map((e) => e.split(""));

//   const graph = {};

//   for (let x = 0; x < mazeArr.length; x++) {
//     for (let y = 0; y < mazeArr.length; y++) {
//       if (mazeArr[x][y] === "W") continue;

//       let neighbours = [];

//       graph[`${x},${y}`] = { neighbours, workingVal: null, finalVal: null };

//       // Check right
//       if (x + 1 <= mazeArr.length - 1 && mazeArr[x + 1][y] === ".") {
//         neighbours.push(`${x + 1},${y}`);
//         // graph[`${x + 1},${y}`].workingVal = 1 + graph[`${x},${y}`].finalVal;
//         graph[`${x + 1},${y}`] = {
//           workingVal: 1 + graph[`${x},${y}`].finalVal,
//         };
//       }
//       // Check left
//       if (x - 1 >= 0 && mazeArr[x - 1][y] === ".") {
//         neighbours.push(`${x - 1},${y}`);
//         // graph[`${x - 1},${y}`].workingVal = 1 + graph[`${x},${y}`].finalVal;
//         graph[`${x - 1},${y}`] = {
//           workingVal: 1 + graph[`${x},${y}`].finalVal,
//         };
//       }
//       // Check down
//       if (y + 1 <= mazeArr.length - 1 && mazeArr[x][y + 1] === ".") {
//         neighbours.push(`${x},${y + 1}`);
//         // graph[`${x},${y + 1}`].workingVal = 1 + graph[`${x},${y}`].finalVal;
//         graph[`${x},${y + 1}`] = {
//           workingVal: 1 + graph[`${x},${y}`].finalVal,
//         };
//       }
//       // Check up
//       if (y - 1 >= 0 && mazeArr[x][y - 1] === ".") {
//         neighbours.push(`${x},${y - 1}`);
//         // graph[`${x},${y - 1}`].workingVal = 1 + graph[`${x},${y}`].finalVal;
//         graph[`${x},${y - 1}`] = {
//           workingVal: 1 + graph[`${x},${y}`].finalVal,
//         };
//       }

//       graph[`${x},${y}`] = { neighbours, workingVal: null, finalVal: null };
//     }
//   }

//   Object.keys(graph).forEach((e) => {
//     console.log({ e }, graph[e]);
//   });

//   return false;
// }
