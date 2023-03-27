function getNeighbours(mazeArr, x, y) {
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

  // console.log({ x, y, neighbours });

  return neighbours;
}

module.exports = { getNeighbours };
