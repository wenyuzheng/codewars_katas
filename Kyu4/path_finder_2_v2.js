export function pathFinder(maze) {
  let mazeArr = maze.split("\n").map((e) => e.split(""));

  const graph = {};

  for (let x = 0; x < mazeArr.length; x++) {
    for (let y = 0; y < mazeArr.length; y++) {
      if (mazeArr[x][y] === "W") continue;

      let neighbours = [];

      // Check right
      if (x + 1 <= mazeArr.length - 1 && mazeArr[x + 1][y] === ".") {
        console.log("right");
        neighbours.push([x + 1, y]);
      }
      // Check left
      if (x - 1 >= 0 && mazeArr[x - 1][y] === ".") {
        console.log("left");
        neighbours.push([x - 1, y]);
      }
      // Check down
      if (y + 1 <= mazeArr.length - 1 && mazeArr[x][y + 1] === ".") {
        console.log("down");
        neighbours.push([x, y + 1]);
      }
      // Check up
      if (y - 1 >= 0 && mazeArr[x][y - 1] === ".") {
        console.log("up");
        neighbours.push([x, y - 1]);
      }

      graph[[x, y]] = neighbours;
    }
  }

  Object.keys(graph).forEach((e) => {
    console.log({ e }, graph[e]);
  });

  return false;
}
