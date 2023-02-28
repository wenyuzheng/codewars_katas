function pathFinder(maze) {
  console.log(maze.length);
  for (let i = 0; i < maze[0].length; i++) {
    console.log(maze[0][i]);
  }
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
