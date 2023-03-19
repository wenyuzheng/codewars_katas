import { assert } from "chai";
import { pathFinder } from "../path_finder_2.js";

function testMaze(expected, maze) {
  assert.strictEqual(pathFinder(maze), expected, "maze\n" + maze);
}

it("Basic tests", function () {
  testMaze(
    4,
    `.W.
.W.
...`
  );

  testMaze(
    false,
    `.W.
.W.
W..`
  );

  testMaze(
    10,
    `......
......
......
......
......
......`
  );

  testMaze(
    false,
    `......
......
......
......
.....W
....W.`
  );
});
