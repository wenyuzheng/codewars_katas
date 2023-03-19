import { expect } from "chai";
import { Sudoku } from "../validate_sudoku.js";

var goodSudoku1 = new Sudoku([
  [7, 8, 4, 1, 5, 9, 3, 2, 6],
  [5, 3, 9, 6, 7, 2, 8, 4, 1],
  [6, 1, 2, 4, 3, 8, 7, 5, 9],

  [9, 2, 8, 7, 1, 5, 4, 6, 3],
  [3, 5, 7, 8, 4, 6, 1, 9, 2],
  [4, 6, 1, 9, 2, 3, 5, 8, 7],

  [8, 7, 6, 3, 9, 4, 2, 1, 5],
  [2, 4, 3, 5, 6, 1, 9, 7, 8],
  [1, 9, 5, 2, 8, 7, 6, 3, 4],
]);

var goodSudoku2 = new Sudoku([
  [1, 4, 2, 3],
  [3, 2, 4, 1],

  [4, 1, 3, 2],
  [2, 3, 1, 4],
]);

var badSudoku1 = new Sudoku([
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],

  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],

  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
]);

var badSudoku2 = new Sudoku([[1, 2, 3, 4, 5], [1, 2, 3, 4], [1, 2, 3, 4], [1]]);

var badSudoku3 = new Sudoku([
  [1, 1, 1, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],

  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],

  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
]);

var badSudoku4 = new Sudoku([
  [2, 3, 5, 4, 6, 7, 9, 8, 1],
  [1, 8, 2, 5, 7, 6, 3, 9, 4],
  [3, 9, 1, 2, 8, 4, 5, 6, 7],
  [5, 2, 6, 1, 3, 9, 7, 4, 8],
  [8, 1, 4, 6, 9, 5, 2, 7, 3],
  [4, 5, 7, 8, 1, 3, 6, 2, 9],
  [6, 7, 9, 3, 4, 1, 8, 5, 2],
  [9, 4, 8, 7, 5, 2, 1, 3, 6],
  [7, 6, 3, 9, 2, 8, 4, 1, 5],
]);

var badSudoku5 = new Sudoku([
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
]);

describe("Sudoku", function () {
  //   describe("should be valid", function () {
  //     expect(goodSudoku1.isValid()).equal(true);
  //     expect(goodSudoku2.isValid()).equal(true);
  //   });

  describe("should be invalid", function () {
    // it("invalid column", () => {
    //   expect(badSudoku1.isValid()).equal(false);
    // });
    // it("not NxN", () => {
    //   expect(badSudoku2.isValid()).equal(false);
    // });
    // it("invalid row", () => {
    //   expect(badSudoku3.isValid()).equal(false);
    // });
    it("invalid square", () => {
      expect(badSudoku4.isValid()).equal(false);
    });
    // it("√N !== integer", () => {
    //   expect(badSudoku5.isValid()).equal(false);
    // });
    // it("invalid value in set", () => {
    //   expect(new Sudoku([[2]]).isValid()).equal(false);
    // });
  });
});
