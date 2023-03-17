const {
  couldViewBeSatisfied,
  prefill,
  solvePuzzle,
} = require("../n_by_n_skyscraper");

describe("couldViewBeSatisfied", () => {
  test("example 1", () => {
    const view = [1, 0, 4, 0, 3, 0];
    const reqs = [2, 4];
    const expected = [1, 6, 4, 5, 3, 2];
    const result = couldViewBeSatisfied(view, reqs);
    expect(result).toEqual(expected);
  });
});

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

// import { assert, expect } from "chai";
// import _ from "lodash";
// import {
//   solvePuzzle,
//   prefill,
//   couldViewBeSatisfied,
// } from "../n_by_n_skyscraper.js";

// import {
//   solvePuzzle,
//   prefill,
//   couldViewBeSatisfied,
// } from "../n_by_n_skyscraper.mjs";

// // import { expect } from "@jest/globals";
// test("example 1", () => {
//   const view = [1, 0, 4, 0, 3, 0];
//   const reqs = [2, 4];
//   const expected = [1, 6, 4, 5, 3, 2];
//   const result = couldViewBeSatisfied(view, reqs);
//   expect(result).toEqual(expected);
// });

// describe("prefill", function () {
//   var requirement = [
//     [4, 1, 1, 2],
//     [2, 0, 3, 2],
//     [3, 4, 2, 3],
//     [1, 2, 3, 3],
//   ];
//   const n = 4;

//   it("prefill", function () {
//     const puzzle = [];
//     for (let i = 0; i < n; i++) {
//       puzzle.push(new Array(n).fill(0));
//     }
//     const expected = [
//       [1, 4, 4, 0],
//       [2, 0, 3, 4],
//       [3, 4, 2, 0],
//       [4, 3, 1, 3],
//     ];

//     const actual = prefill(puzzle, requirement);
//     assertFunc(expected, actual);
//   });
// });

// describe("Skyscrapers", function () {
//   // it("can solve 4x4 puzzle 1", function () {
//   //   var clues = [2, 2, 1, 3, 2, 2, 3, 1, 1, 2, 2, 3, 3, 2, 1, 3];
//   //   var expected = [
//   //     [1, 3, 4, 2],
//   //     [4, 2, 1, 3],
//   //     [3, 4, 2, 1],
//   //     [2, 1, 3, 4],
//   //   ];
//   //   var actual = solvePuzzle(clues);
//   //   assertFunc(expected, actual);
//   // });
//   // it("can solve 4x4 puzzle 2", function () {
//   //   var clues = [0, 0, 1, 2, 0, 2, 0, 0, 0, 3, 0, 0, 0, 1, 0, 0];
//   //   var expected = [
//   //     [2, 1, 4, 3],
//   //     [3, 4, 1, 2],
//   //     [4, 2, 3, 1],
//   //     [1, 3, 2, 4],
//   //   ];
//   //   var actual = solvePuzzle(clues);
//   //   assertFunc(expected, actual);
//   // });
//   describe("couldViewBeSatisfied", () => {
//     it("example 1", () => {
//       const view = [1, 0, 4, 0, 3, 0];
//       const reqs = [2, 4];
//       const expected = [1, 6, 4, 5, 3, 2];
//       const result = couldViewBeSatisfied(view, reqs);
//       expect(_.isEqual(expected, result)).equal(true);
//     });
//   });
// });

// function assertFunc(expected, actual) {
//   assert.strictEqual(actual.length, 4);
//   for (var i = 0; i < 4; i++) {
//     assert.deepEqual(actual[i].toString(), expected[i].toString());
//   }
// }

// test("adds 1 + 1 to equal 2", () => {
//   expect([1, 1]).toEqual([1, 1]);
// });
