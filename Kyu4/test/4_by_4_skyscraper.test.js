import { assert } from "chai";
import {
  solvePuzzle,
  prefillFromNorth,
  prefillFromEast,
  prefillFromSouth,
  prefillFromWest,
  prefill,
} from "../n_by_n_skyscraper.js";

describe("prefill", function () {
  var requirement = [
    [4, 1, 1, 0],
    [2, 0, 1, 2],
    [0, 4, 2, 3],
    [1, 2, 3, 3],
  ];
  const n = 4;
  // const puzzle = [];
  // for (let i = 0; i < n; i++) {
  //   puzzle.push(new Array(n).fill(0));
  // }

  it("prefill", function () {
    const puzzle = [];
    for (let i = 0; i < n; i++) {
      puzzle.push(new Array(n).fill(0));
    }
    const expected = [
      [1, 4, 4, 0],
      [2, 0, 3, 0],
      [3, 0, 2, 4],
      [4, 3, 1, 3],
    ];

    const actual = prefill(puzzle, requirement);
    console.log({ actual });
    assertFunc(expected, actual);
  });

  // it("prefill From North", function () {
  //   const puzzle = [];
  //   for (let i = 0; i < n; i++) {
  //     puzzle.push(new Array(n).fill(0));
  //   }
  //   const expected = [
  //     [1, 0, 4, 0],
  //     [2, 0, 0, 0],
  //     [3, 0, 0, 0],
  //     [4, 0, 0, 0],
  //   ];
  //   const actual = prefillFromNorth(puzzle, requirement);
  //   assertFunc(expected, actual);
  // });

  // it("prefill From East", function () {
  //   const puzzle = [];
  //   for (let i = 0; i < n; i++) {
  //     puzzle.push(new Array(n).fill(0));
  //   }
  //   const expected = [
  //     [4, 3, 2, 1],
  //     [0, 0, 0, 0],
  //     [0, 0, 0, 4],
  //     [0, 0, 0, 4],
  //   ];
  //   const actual = prefillFromEast(puzzle, requirement);
  //   assertFunc(expected, actual);
  // });

  // it("prefill From South", function () {
  //   const puzzle = [];
  //   for (let i = 0; i < n; i++) {
  //     puzzle.push(new Array(n).fill(0));
  //   }
  //   const expected = [
  //     [4, 0, 4, 0],
  //     [3, 0, 3, 0],
  //     [2, 0, 2, 0],
  //     [1, 0, 1, 4],
  //   ];
  //   const actual = prefillFromSouth(puzzle, requirement);
  //   assertFunc(expected, actual);
  // });

  // it("prefill From West", function () {
  //   const puzzle = [];
  //   for (let i = 0; i < n; i++) {
  //     puzzle.push(new Array(n).fill(0));
  //   }
  //   const expected = [
  //     [0, 0, 0, 0],
  //     [1, 2, 3, 4],
  //     [0, 0, 0, 0],
  //     [4, 0, 0, 0],
  //   ];
  //   const actual = prefillFromWest(puzzle, requirement);
  //   assertFunc(expected, actual);
  // });
});

// describe("Skyscrapers", function () {
//   it("can solve 4x4 puzzle 1", function () {
//     var clues = [2, 2, 1, 3, 2, 2, 3, 1, 1, 2, 2, 3, 3, 2, 1, 3];
//     var expected = [
//       [1, 3, 4, 2],
//       [4, 2, 1, 3],
//       [3, 4, 2, 1],
//       [2, 1, 3, 4],
//     ];
//     var actual = solvePuzzle(clues);
//     assertFunc(expected, actual);
//   });
//   it("can solve 4x4 puzzle 2", function () {
//     var clues = [0, 0, 1, 2, 0, 2, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0];
//     var expected = [
//       [2, 1, 4, 3],
//       [3, 4, 1, 2],
//       [4, 2, 3, 1],
//       [1, 3, 2, 4],
//     ];
//     var actual = solvePuzzle(clues);
//     assertFunc(expected, actual);
//   });
// });

function assertFunc(expected, actual) {
  assert.strictEqual(actual.length, 4);
  for (var i = 0; i < 4; i++) {
    assert.deepEqual(actual[i].toString(), expected[i].toString());
  }
}
