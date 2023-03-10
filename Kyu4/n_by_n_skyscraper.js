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

const getNorthView = (puzzle, j) => puzzle.map((e) => e[j]);

const satisfy_north = (puzzle, requirement) => {
  const northReq = requirement[0];
  for (let j = 0; j < puzzle.length; j++) {
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
  for (let i = 0; i < puzzle.length; i++) {
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
  let columnJ = puzzle.length - 1;
  for (let j = 0; j < puzzle.length; j++) {
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
  let rowI = puzzle.length - 1;
  for (let i = 0; i < puzzle.length; i++) {
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

  for (let k = 1; k <= puzzle.length; k++) {
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

export const prefillFromNorth = (puzzle, requirement) => {
  const northReq = requirement[0];
  for (let j = 0; j < northReq.length; j++) {
    if (northReq[j] === 4) {
      puzzle[0][j] = 1;
      puzzle[1][j] = 2;
      puzzle[2][j] = 3;
      puzzle[3][j] = 4;
    } else if (northReq[j] === 1) {
      puzzle[0][j] = 4;
    }
  }

  return puzzle;
};

export const prefillFromEast = (puzzle, requirement) => {
  const eastReq = requirement[1];
  for (let i = 0; i < eastReq.length; i++) {
    if (eastReq[i] === 4) {
      puzzle[i][3] = 1;
      puzzle[i][2] = 2;
      puzzle[i][1] = 3;
      puzzle[i][0] = 4;
    } else if (eastReq[i] === 1) {
      puzzle[i][3] = 4;
    }
  }

  return puzzle;
};

export const prefillFromSouth = (puzzle, requirement) => {
  const southReq = requirement[2];
  let columnJ = 3;
  for (let j = 0; j < southReq.length; j++) {
    if (southReq[j] === 4) {
      puzzle[3][columnJ] = 1;
      puzzle[2][columnJ] = 2;
      puzzle[1][columnJ] = 3;
      puzzle[0][columnJ] = 4;
    } else if (southReq[j] === 1) {
      puzzle[3][columnJ] = 4;
    }
    columnJ--;
  }

  return puzzle;
};

export const prefillFromWest = (puzzle, requirement) => {
  const westReq = requirement[3];
  let rowI = 3;
  for (let i = 0; i < westReq.length; i++) {
    if (westReq[i] === 4) {
      puzzle[rowI][0] = 1;
      puzzle[rowI][1] = 2;
      puzzle[rowI][2] = 3;
      puzzle[rowI][3] = 4;
    } else if (westReq[i] === 1) {
      puzzle[rowI][0] = 4;
    }
    rowI--;
  }

  return puzzle;
};

const solve = (puzzle, requirement) => {
  const empty = getNextEmpty(puzzle);

  if (empty === true) {
    if (satisfyAll(puzzle, requirement) === true) return puzzle;
    else return false;
  }

  const [i, j] = empty;
  const possibilities = getPossibleValues(puzzle, i, j);

  for (let k = 0; k < possibilities.length; k++) {
    puzzle[i][j] = possibilities[k];
    const attemptedRes = solve(puzzle, requirement);

    if (attemptedRes !== false) {
      return puzzle;
    } else {
      puzzle[i][j] = 0;
    }
  }

  return false;
};

export const solvePuzzle = (clues, n = 4) => {
  const requirement = [];
  while (clues.length !== 0) {
    requirement.push(clues.splice(0, n));
  }

  const puzzle = [];
  for (let i = 0; i < n; i++) {
    puzzle.push(new Array(n).fill(0));
  }

  return solve(puzzle, requirement);
};