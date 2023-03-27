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

  // Object.keys(graph).forEach((e) => {
  //   graph[e].neighbours.forEach((n) => {
  //     if (graph[n].workingVal === null) {
  //       graph[n].workingVal = 1 + graph[e].finalVal;
  //     }
  //     graph[n].neighbours.forEach((n2) => {});
  //   });

  //   // console.log({ e }, graph[e]);
  // });
  dijkstra(graph);

  return false;
}

// const updateWorkingVal = (node, graph) => {
//   console.log({ node });
//   graph[node].neighbours.forEach((n) => {
//     graph[n].workingVal = 1 + graph[node].finalVal;
//   });
// };

const dijkstra = (graph) => {
  // const visited = ["0,0"];
  graph["0,0"].finalVal = 0;

  // Update working value of neighbours
  graph["0,0"].neighbours.forEach((n) => {
    if (graph[n].workingVal === undefined) {
      graph[n].workingVal = 1 + graph["0,0"].finalVal;
    } else {
      graph[n].workingVal = Math.min(
        graph[n].workingVal,
        1 + graph["0,0"].finalVal
      );
    }
  });

  // Get all nodes with working value but no final value
  const nodesWithWorkingNoFinal = {};
  Object.keys(graph).forEach((k) => {
    if (graph[k].workingVal && !graph[k].finalVal) {
      nodesWithWorkingNoFinal[k] = graph[k];
    }
  });
  // console.log({ nodesWithWorkingNoFinal });

  // Pick the node with least working value
  let min = [Infinity, null];
  Object.keys(nodesWithWorkingNoFinal).forEach((node) => {
    min =
      min[0] <= graph[node].workingVal ? min : [graph[node].workingVal, node];
  });
  console.log({ min }, graph[min[1]]);

  graph[min[1]].finalVal = graph[min[1]].workingVal;

  // for (let i = 0; i < Object.keys(graph).length; i++) {
  // const [k, v] = Object.entries(graph)[i];

  // // if (visited.includes(k)) continue;

  // visited.push(k);

  // v.neighbours.forEach((n) => {
  //   graph[n].workingVal = 1 + v.finalVal;
  // });
  // }
  console.log({ graph });
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
