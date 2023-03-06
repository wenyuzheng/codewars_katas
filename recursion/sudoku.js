const notInRow = (puzzle, i, k) => {
  return !puzzle[i].includes(k);
};

const notInColumn = (puzzle, j, k) => {
  const column = puzzle.map((e) => e[j]);
  return !column.includes(k);
};

const getPossibleValues = (puzzle, i, j) => {
  let result = [];

  for (let k = 1; k <= 9; k++) {
    if (notInRow(puzzle, i, k) && notInColumn(puzzle, j, k)) {
      result.push(k);
    }
  }

  return result;
};

const getNextEmpty = (puzzle) => {
  for (let i = 0; i < puzzle.length; i++) {
    for (let j = 0; j < puzzle.length; j++) {
      if (puzzle[i][j] === 0) return [i, j];
    }
  }

  return true;
};

const solve = (puzzle) => {
  const empty = getNextEmpty(puzzle);

  if (empty === true) return puzzle;
  const [i, j] = empty;

  const possibilities = getPossibleValues(puzzle, i, j);

  for (let k = 0; k < possibilities.length; k++) {
    puzzle[i][j] = possibilities[k];
    const attemptedRes = solve(puzzle);

    if (attemptedRes !== false) {
      return puzzle;
    } else {
      puzzle[i][j] = 0;
    }
  }

  return false;
};

const puzzle_1 = [
  [0, 0, 0, 2, 6, 0, 7, 0, 1],
  [6, 8, 0, 0, 7, 0, 0, 9, 0],
  [1, 9, 0, 0, 0, 4, 5, 0, 0],
  [8, 2, 0, 1, 0, 0, 0, 4, 0],
  [0, 0, 4, 6, 0, 2, 9, 0, 0],
  [0, 5, 0, 0, 0, 3, 0, 2, 8],
  [0, 0, 9, 3, 0, 0, 0, 7, 4],
  [0, 4, 0, 0, 5, 0, 0, 3, 6],
  [7, 0, 3, 0, 1, 8, 0, 0, 0],
];

const puzzle_1_solution = [
  [4, 3, 5, 2, 6, 9, 7, 8, 1],
  [6, 8, 2, 5, 7, 1, 4, 9, 3],
  [1, 9, 7, 8, 3, 4, 5, 6, 2],
  [8, 2, 6, 1, 9, 5, 3, 4, 7],
  [3, 7, 4, 6, 8, 2, 9, 1, 5],
  [9, 5, 1, 7, 4, 3, 6, 2, 8],
  [5, 1, 9, 3, 2, 6, 8, 7, 4],
  [2, 4, 8, 9, 5, 7, 1, 3, 6],
  [7, 6, 3, 4, 1, 8, 2, 5, 9],
];

const puzzle_2 = [
  [4, 3, 5, 2, 6, 9, 7, 8, 1],
  [6, 8, 2, 5, 7, 1, 4, 9, 3],
  [1, 9, 7, 8, 3, 4, 5, 6, 2],
  [8, 2, 6, 1, 0, 5, 3, 4, 7],
  [3, 7, 4, 6, 8, 2, 9, 1, 5],
  [9, 5, 1, 7, 4, 3, 6, 2, 8],
  [5, 1, 9, 3, 2, 6, 8, 7, 4],
  [2, 4, 8, 9, 5, 7, 1, 3, 6],
  [7, 6, 3, 4, 1, 8, 2, 5, 9],
];

const puzzle_3 = [
  [0, 0, 0, 0, 0, 0, 0, 0, 1],
  [0, 8, 0, 0, 7, 0, 0, 9, 0],
  [0, 9, 0, 0, 0, 4, 5, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 4, 0],
  [0, 0, 4, 6, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 0, 0, 0],
  [0, 0, 9, 3, 0, 0, 0, 0, 0],
  [0, 4, 0, 0, 0, 0, 0, 0, 0],
  [7, 0, 0, 0, 0, 8, 0, 0, 0],
];

// console.log(notInRow(puzzle_1, 1, 2)); // true
// console.log(notInRow(puzzle_1, 8, 7)); // false
// console.log(notInColumn(puzzle_1, 0, 2)); // true
// console.log(notInColumn(puzzle_1, 3, 2)); // false

// console.log(getPossibleValues(puzzle_1, 0, 0)); // [3, 4, 5, 9]

// console.log(getNextEmpty(puzzle_1_solution)); // 3, 4

// console.log(solve(puzzle_1));
console.log(solve(puzzle_3));

[
  [2, 3, 5, 4, 6, 7, 9, 8, 1],
  [1, 8, 2, 5, 7, 6, 3, 9, 4],
  [3, 9, 1, 2, 8, 4, 5, 6, 7],
  [5, 2, 6, 1, 3, 9, 7, 4, 8],
  [8, 1, 4, 6, 9, 5, 2, 7, 3],
  [4, 5, 7, 8, 1, 3, 6, 2, 9],
  [6, 7, 9, 3, 4, 1, 8, 5, 2],
  [9, 4, 8, 7, 5, 2, 1, 3, 6],
  [7, 6, 3, 9, 2, 8, 4, 1, 5],
];
