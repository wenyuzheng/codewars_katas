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

const prefill = (puzzle, requirement) => {
  const n = requirement.length;

  const nsReq = [];
  for (let j = 0; j < requirement.length; j++) {
    nsReq.push([requirement[0][j], requirement[2][n - 1 - j]]);
  }

  for (let k = 0; k < nsReq.length; k++) {
    // 1 <-> 2: 4xx3
    if (nsReq[k][0] === 1 && nsReq[k][1] === 2) {
      puzzle[0][k] = 4;
      puzzle[3][k] = 3;
    }
    if (nsReq[k][0] === 2 && nsReq[k][1] === 1) {
      puzzle[0][k] = 3;
      puzzle[3][k] = 4;
    }
    // 2 <-> 3: x4xx
    if (nsReq[k][0] === 2 && nsReq[k][1] === 3) {
      puzzle[1][k] = 4;
    }
    if (nsReq[k][0] === 3 && nsReq[k][1] === 2) {
      puzzle[2][k] = 4;
    }
    if (nsReq[k][0] === 4) {
      puzzle[0][k] = 1;
      puzzle[1][k] = 2;
      puzzle[2][k] = 3;
      puzzle[3][k] = 4;
    }
    if (nsReq[k][0] === 1) {
      puzzle[0][k] = 4;
    }
    if (nsReq[k][1] === 4) {
      puzzle[3][k] = 1;
      puzzle[2][k] = 2;
      puzzle[1][k] = 3;
      puzzle[0][k] = 4;
    }
    if (nsReq[k][1] === 1) {
      puzzle[3][k] = 4;
    }
  }

  const weReq = [];
  for (let i = 0; i < requirement.length; i++) {
    weReq.push([requirement[3][n - 1 - i], requirement[1][i]]);
  }

  for (let z = 0; z < weReq.length; z++) {
    // 1 <-> 2: 4xx3
    if (weReq[z][0] === 1 && weReq[z][1] === 2) {
      puzzle[z][0] = 4;
      puzzle[z][3] = 3;
    }
    if (weReq[z][0] === 2 && weReq[z][1] === 1) {
      puzzle[z][0] = 3;
      puzzle[z][3] = 4;
    }
    // 2 <-> 3: x4xx
    if (weReq[z][0] === 2 && weReq[z][1] === 3) {
      puzzle[z][1] = 4;
    }
    if (weReq[z][0] === 3 && weReq[z][1] === 2) {
      puzzle[z][2] = 4;
    }
    if (weReq[z][0] === 4) {
      puzzle[z][0] = 1;
      puzzle[z][1] = 2;
      puzzle[z][2] = 3;
      puzzle[z][3] = 4;
    }
    if (weReq[z][0] === 1) {
      puzzle[z][0] = 4;
    }
    if (weReq[z][1] === 4) {
      puzzle[z][3] = 1;
      puzzle[z][2] = 2;
      puzzle[z][1] = 3;
      puzzle[z][0] = 4;
    }
    if (weReq[z][1] === 1) {
      puzzle[z][3] = 4;
    }
  }

  return puzzle;
};

const couldViewBeSatisfied = (partialView, twoSideReq) => {};

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

const solvePuzzle = (clues, n = 4) => {
  const requirement = [];
  while (clues.length !== 0) {
    requirement.push(clues.splice(0, n));
  }

  let puzzle = [];
  for (let i = 0; i < n; i++) {
    puzzle.push(new Array(n).fill(0));
  }

  const prefilled = prefill(puzzle, requirement);

  return solve(prefilled, requirement);
};

module.exports = { couldViewBeSatisfied, prefill, solvePuzzle };
