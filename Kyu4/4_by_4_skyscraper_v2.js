const number_of_views = (view) => {
  const selected = [];
  for (let i = 0; i < view.length; i++) {
    if (selected.length === 0) {
      selected.push(view[0]);
    } else if (view[i] > selected[selected.length - 1]) {
      selected.push(view[i]);
    }
  }

  return selected.length;
};

// console.log(number_of_views([1, 2, 3, 4, 3, 3, 5])); // 5
// console.log(number_of_views([4, 3, 2, 1])); // 1
// console.log(number_of_views([2, 3, 4, 1])); // 3

const getNorthView = (puzzle, j) => puzzle.map((e) => e[j]);

const satisfy_north = (puzzle, requirement) => {
  const northReq = requirement[0];
  for (let j = 0; j < 4; j++) {
    const northView = getNorthView(puzzle, j);
    if (northReq[j] === 0) continue;
    if (number_of_views(northView) !== northReq[j]) {
      return false;
    }
  }

  return true;
};

const getEastView = (puzzle, i) => [...puzzle[i]].reverse();

const satisfyEast = (puzzle, requirement) => {
  const eastReq = requirement[1];
  for (let i = 0; i < 4; i++) {
    const view = getEastView(puzzle, i);
    if (eastReq[i] === 0) continue;
    if (number_of_views(view) !== eastReq[i]) {
      return false;
    }
  }

  return true;
};

const getSouthView = (puzzle, j) => puzzle.map((e) => e[j]).reverse();

const satisfySouth = (puzzle, requirement) => {
  const southReq = requirement[2];
  let columnJ = 3;
  for (let j = 0; j < 4; j++) {
    const view = getSouthView(puzzle, columnJ);
    columnJ--;
    if (southReq[j] === 0) continue;
    if (number_of_views(view) !== southReq[j]) {
      return false;
    }
  }

  return true;
};

const getWestView = (puzzle, i) => puzzle[i];

const satisfyWest = (puzzle, requirement) => {
  const westReq = requirement[3];
  let rowI = 3;
  for (let i = 0; i < 4; i++) {
    const view = getWestView(puzzle, rowI);
    rowI--;
    if (westReq[i] === 0) continue;
    if (number_of_views(view) !== westReq[i]) {
      return false;
    }
  }

  return true;
};

const satisfyAll = (puzzle, requirement) => {
  return (
    satisfy_north(puzzle, requirement) &&
    satisfyEast(puzzle, requirement) &&
    satisfySouth(puzzle, requirement) &&
    satisfyWest(puzzle, requirement)
  );
};

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
    if (
      notInRow(puzzle, i, k) &&
      notInColumn(puzzle, j, k) &&
      notInSquare(puzzle, i, j, k)
    ) {
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

  if (empty === true) {
    if (satisfyAll(puzzle, requirement) === true) return puzzle;
    else return false;
  }
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

const requirement = [
  [4, 1, 3, 0],
  [2, 2, 0, 1],
  [1, 0, 4, 1],
  [1, 2, 0, 2],
];

const puzzle_1 = [
  [1, 4, 1, 1],
  [2, 3, 2, 2],
  [3, 4, 4, 0],
  [2, 1, 2, 3],
];

// console.log(satisfy_north(puzzle_1, requirement));
// console.log(satisfyEast(puzzle_1, requirement));
// console.log(satisfySouth(puzzle_1, requirement));
console.log(satisfyWest(puzzle_1, requirement));

// function solvePuzzle(clues) {}

// console.log(solvePuzzle([2, 2, 1, 3, 2, 2, 3, 1, 1, 2, 2, 3, 3, 2, 1, 3]));
//  [
//    [1, 3, 4, 2],
//    [4, 2, 1, 3],
//    [3, 4, 2, 1],
//    [2, 1, 3, 4],
//  ];
