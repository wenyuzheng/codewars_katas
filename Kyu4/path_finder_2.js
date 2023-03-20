export function pathFinder(maze) {
  let mazeArr = maze.split("\n").map((e) => e.split(""));
  let stack = [[0, 0]];
  let chain = { "0,0": null };

  while (stack.length !== 0) {
    const [y, x] = stack.pop(); // DFS

    // Reach exit
    if (x === mazeArr.length - 1 && y === mazeArr.length - 1) {
      return true;
    }

    // Check right
    if (x + 1 <= mazeArr.length - 1 && mazeArr[y][x + 1] === ".") {
      stack.push([y, x + 1]);
      chain[`${y},${x + 1}`] = [y, x];
    }
    // Check left
    if (x - 1 >= 0 && mazeArr[y][x - 1] === ".") {
      stack.push([y, x - 1]);
      chain[`${y},${x - 1}`] = [y, x];
    }
    // Check down
    if (y + 1 <= mazeArr.length - 1 && mazeArr[y + 1][x] === ".") {
      stack.push([y + 1, x]);
      chain[`${y + 1},${x}`] = [y, x];
    }
    // Check up
    if (y - 1 >= 0 && mazeArr[y - 1][x] === ".") {
      stack.push([y - 1, x]);
      chain[`${y - 1},${x}`] = [y, x];
    }

    mazeArr[y][x] = "v"; // Mark as visited

    console.log({ chain });
  }

  return false;
}
