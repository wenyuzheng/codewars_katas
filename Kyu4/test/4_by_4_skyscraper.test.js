import { assert } from "chai";
import { solvePuzzle } from "../n_by_n_skyscraper.js";

describe("Skyscrapers", function () {
  it("can solve 4x4 puzzle 1", function () {
    var clues = [2, 2, 1, 3, 2, 2, 3, 1, 1, 2, 2, 3, 3, 2, 1, 3];
    var expected = [
      [1, 3, 4, 2],
      [4, 2, 1, 3],
      [3, 4, 2, 1],
      [2, 1, 3, 4],
    ];
    var actual = solvePuzzle(clues);
    assertFunc(expected, actual);
  });
  it("can solve 4x4 puzzle 2", function () {
    var clues = [0, 0, 1, 2, 0, 2, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0];
    var expected = [
      [2, 1, 4, 3],
      [3, 4, 1, 2],
      [4, 2, 3, 1],
      [1, 3, 2, 4],
    ];
    var actual = solvePuzzle(clues);
    assertFunc(expected, actual);
  });
});

function assertFunc(expected, actual) {
  assert.strictEqual(actual.length, 4);
  for (var i = 0; i < 4; i++) {
    assert.deepEqual(actual[i].toString(), expected[i].toString());
  }
}
