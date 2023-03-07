function solvePuzzle(clues) {
  let puzzle = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  for (let i = 0; i < clues.length; i++) {
    if (clues[i] === 1) {
      if (i <= 3) {
        puzzle[0][i] = 4;
      } else if (i > 3 && i <= 7) {
        puzzle[i % 4][3] = 4;
      } else if (i > 7 && i <= 11) {
        puzzle[3][i] = 4;
      }
    }
  }

  return puzzle;
}

const outerRingPossibilities = (clues) => {
  let puzzle = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
};

const getPossibleValues = (puzzle, clue, i, j) => {
  let values = [];
  if (clue === 1) {
    return [4];
  } else if (clue === 2) {
    let possibleValues = [1, 2, 3];
    if (notInRow(puzzle, i, j) && notInColumn(puzzle, i, j)) {
    }
  }
};

console.log(solvePuzzle([2, 2, 1, 3, 2, 2, 3, 1, 1, 2, 2, 3, 3, 2, 1, 3]));
//  [
//    [1, 3, 4, 2],
//    [4, 2, 1, 3],
//    [3, 4, 2, 1],
//    [2, 1, 3, 4],
//  ];
