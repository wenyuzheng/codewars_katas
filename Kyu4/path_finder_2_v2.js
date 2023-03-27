// const updateWorkingVal = (node, graph) => {
//   console.log({ node });
//   graph[node].neighbours.forEach((n) => {
//     graph[n].workingVal = 1 + graph[node].finalVal;
//   });
// };

// export function pathFinder(maze) {
//   let mazeArr = maze.split("\n").map((e) => e.split(""));

//   const graph = {};

//   for (let x = 0; x < mazeArr.length; x++) {
//     for (let y = 0; y < mazeArr.length; y++) {
//       if (mazeArr[x][y] === "W") continue;

//       let neighbours = [];

//       // Check right
//       if (x + 1 <= mazeArr.length - 1 && mazeArr[x + 1][y] === ".") {
//         // neighbours.push([x + 1, y]);
//         neighbours.push(`${x + 1},${y}`);
//       }
//       // Check left
//       if (x - 1 >= 0 && mazeArr[x - 1][y] === ".") {
//         // neighbours.push([x - 1, y]);
//         neighbours.push(`${x - 1},${y}`);
//       }
//       // Check down
//       if (y + 1 <= mazeArr.length - 1 && mazeArr[x][y + 1] === ".") {
//         // neighbours.push([x, y + 1]);
//         neighbours.push(`${x},${y + 1}`);
//       }
//       // Check up
//       if (y - 1 >= 0 && mazeArr[x][y - 1] === ".") {
//         // neighbours.push([x, y - 1]);
//         neighbours.push(`${x},${y - 1}`);
//       }

//       graph[`${x},${y}`] = { neighbours, workingVal: null, finalVal: null };
//     }
//   }

//   Object.keys(graph).forEach((e) => {
//     if (e === "0,0") {
//       graph[e].workingVal = 0;
//       graph[e].finalVal = 0;
//     }

//     updateWorkingVal(e, graph);

//     graph[e].neighbours.forEach((n) => {
//       updateWorkingVal(n, graph);
//     });

//     console.log({ e }, graph[e]);
//   });

//   return false;
// }

const findPathLength = (chain, target) => {
  let currNode = chain[`${target[0]},${target[1]}`];
  let path = [currNode];
  while (currNode !== [0, 0]) {
    if (currNode === null) break;
    currNode = chain[`${currNode[0]},${currNode[1]}`];
    path.push(currNode);
  }
  return path.length - 1;
};

export function pathFinder(maze) {
  let mazeArr = maze.split("\n").map((e) => e.split(""));
  let stack = [[0, 0]];
  let chain = { "0,0": null };

  while (stack.length !== 0) {
    const [y, x] = stack.pop(); // DFS

    // Reach exit
    if (x === mazeArr.length - 1 && y === mazeArr.length - 1) {
      return findPathLength(chain, [mazeArr.length - 1, mazeArr.length - 1]);
    }

    // Check right
    if (x + 1 <= mazeArr.leng - th - 1 && mazeArr[y][x + 1] === ".") {
      stack.unshift([y, x + 1]);
      chain[`${y},${x + 1}`] = [y, x];
    }
    // Check left
    if (x - 1 >= 0 && mazeArr[y][x - 1] === ".") {
      stack.unshift([y, x - 1]);
      chain[`${y},${x - 1}`] = [y, x];
    }
    // Check down
    if (y + 1 <= mazeArr.length - 1 && mazeArr[y + 1][x] === ".") {
      stack.push([y + 1, x]);
      chain[`${y + 1},${x}`] = [y, x];
    }
    // Check up
    if (y - 1 >= 0 && mazeArr[y - 1][x] === ".") {
      stack.unshift([y - 1, x]);
      chain[`${y - 1},${x}`] = [y, x];
    }

    mazeArr[y][x] = "v"; // Mark as visited
  }

  return false;
}
