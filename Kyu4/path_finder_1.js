function pathFinder(maze) {
  let mazeArr = maze.split("\n").map((e) => e.split(""));
  let stack = [[0, 0]];

  while (stack.length !== 0) {
    const [y, x] = stack.pop(); // DFS
    // const [y, x] = stack.shift(); // BFS

    // Reach exit
    if (x === mazeArr.length - 1 && y === mazeArr.length - 1) {
      return true;
    }

    // Check right
    if (x + 1 <= mazeArr.length - 1 && mazeArr[y][x + 1] === ".") {
      stack.push([y, x + 1]);
    }
    // Check left
    if (x - 1 >= 0 && mazeArr[y][x - 1] === ".") {
      stack.push([y, x - 1]);
    }
    // Check down
    if (y + 1 <= mazeArr.length - 1 && mazeArr[y + 1][x] === ".") {
      stack.push([y + 1, x]);
    }
    // Check up
    if (y - 1 >= 0 && mazeArr[y - 1][x] === ".") {
      stack.push([y - 1, x]);
    }

    mazeArr[y][x] = "v"; // Mark as visited
  }

  return false;
}

console.log(
  pathFinder(
    `.W.
.W.
...`
  )
); // true

console.log(
  pathFinder(
    `.W.
.W.
W..`
  )
); // false

console.log(
  pathFinder(
    `......
......
......
......
......
......`
  )
); // true

console.log(
  pathFinder(
    `......
......
......
......
.....W
....W.`
  )
); // false
