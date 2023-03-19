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

      for (let i = 0; i < n; i++) {
        // Validate data structure dimension
        if (n < 0) return false;
        if (Math.floor(Math.sqrt(n)) !== Math.sqrt(n)) return false;
        if (data[i].length !== n) return false;

        // Validate row
        const row = data[i];
        if (!isUniqueSet(row, n)) return false;

        // Validate column
        const column = data.map((e) => e[i]);
        if (!isUniqueSet(column, n)) return false;

        // const square = data.map((e) => {
        //   console.log(Math.floor(i / 3), Math.floor(data.indexOf(e) / 3));
        // });
        // if (!isUniqueSet(square, n)) return false;
      }

      return true;
    },
  };
};
