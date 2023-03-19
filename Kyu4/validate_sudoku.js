export const Sudoku = function (data) {
  const isUniqueSet = (set, n) => {
    // Should only contain integers 1...N
    for (let k = 1; k <= n; k++) {
      if (!set.includes(k)) return false;
    }

    // Each integer should only appear once
    const uniqRow = new Set(set);
    return uniqRow.size === n;
  };

  return {
    isValid: function () {
      const n = data.length;
      const nSqrt = Math.sqrt(n);

      if (n < 0) return false;
      if (Math.floor(nSqrt) !== nSqrt) return false;

      for (let z = 0; z < n; z++) {
        // Validate data structure dimension
        if (data[z].length !== n) return false;

        // Validate row
        const row = data[z];
        if (!isUniqueSet(row, n)) return false;

        // Validate column
        const column = data.map((e) => e[z]);
        if (!isUniqueSet(column, n)) return false;
      }

      // Validate square
      for (let i = 0; i < nSqrt; i++) {
        for (let j = 0; j < nSqrt; j++) {
          const r = i * nSqrt;
          const c = j * nSqrt;

          let square = [];
          for (let x = 0; x < nSqrt; x++) {
            for (let y = 0; y < nSqrt; y++) {
              square.push(data[r + x][c + y]);
            }
          }

          if (!isUniqueSet(square, n)) return false;
        }
      }

      return true;
    },
  };
};
