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

        // for (let j = 0; j < n; j++) {
        //   const firstRow = Math.floor(i / 3) * 3;
        //   const firstColumn = Math.floor(j / 3) * 3;

        //   let square = [];

        //   for (let x = 0; x < 3; x++) {
        //     for (let y = 0; y < 3; y++) {
        //       square.push(data[firstRow + x][firstColumn + y]);
        //     }
        //   }

        //   console.log({ square });
        //   if (!isUniqueSet(square, n)) return false;
        // }
      }

      //   let firstI = 0;
      //   let firstJ = 0;

      //   for (let i = 0; i < nSqrt; i++) {
      //     console.log({ firstI, firstJ });

      //     for (let j = 0; j < nSqrt; j++) {
      //       let square = [
      //         data[firstI][firstJ],
      //         data[firstI][firstJ + 1],
      //         data[firstI][firstJ + 2],
      //         data[firstI + 1][firstJ],
      //         data[firstI + 1][firstJ + 1],
      //         data[firstI + 1][firstJ + 2],
      //         data[firstI + 2][firstJ],
      //         data[firstI + 2][firstJ + 1],
      //         data[firstI + 2][firstJ + 2],
      //       ];

      //       console.log({ square });
      //     }
      //     firstI = firstI + nSqrt;
      //     firstJ = firstJ + nSqrt;
      //   }

      for (let i = 0; i < nSqrt; i++) {
        for (let j = 0; j < nSqrt; j++) {
          const r = i * 3;
          const c = j * 3;

          console.log({ r, c });

          let square = [
            data[i][j],
            data[i][j + 1],
            data[i][j + 2],
            data[i + 1][j],
            data[i + 1][j + 1],
            data[i + 1][j + 2],
            data[i + 2][j],
            data[i + 2][j + 1],
            data[i + 2][j + 2],
          ];

          let pairs = [
            [r, c],
            [r, c + 1],
            [r, c + 2],
            [r + 1, c],
            [r + 1, c + 1],
            [r + 1, c + 2],
            [r + 2, c],
            [r + 2, c + 1],
            [r + 2, c + 2],
          ];

          console.log({ pairs });
        }
      }

      return true;
    },
  };
};
