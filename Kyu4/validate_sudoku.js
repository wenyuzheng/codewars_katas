export const Sudoku = function (data) {
  const isUniqueSet = (row, n) => {
    const uniqRow = new Set(row);
    return uniqRow.size === n;
  };

  return {
    isValid: function () {
      const n = data.length;

      for (let i = 0; i < n; i++) {
        if (data[i].length !== n) return false;

        const row = data[i];
        if (!isUniqueSet(row, n)) return false;

        const column = data.map((e) => e[i]);
        if (!isUniqueSet(column, n)) return false;
      }

      return true;
    },
  };
};
