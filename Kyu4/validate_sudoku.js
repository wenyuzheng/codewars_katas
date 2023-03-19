// export const Sudoku = function (data) {
//   const isUniqueSet = (row, n) => {
//     const uniqRow = new Set(row);
//     return uniqRow.size === n;
//   };

//   return {
//     isValid: function () {
//       const n = data.length;

//       for (let i = 0; i < n; i++) {
//         if (data[i].length !== n) return false;

//         const row = data[i];
//         if (!isUniqueSet(row, n)) return false;

//         const column = data.map((e) => e[i]);
//         if (!isUniqueSet(column, n)) return false;

//         // const square = data.map((e) => {
//         //   console.log(Math.floor(i / 3), Math.floor(data.indexOf(e) / 3));
//         // });
//         // if (!isUniqueSet(square, n)) return false;
//       }

//       return true;
//     },
//   };
// };

export const Sudoku = function (data) {
  const isUniqueSet = (row, n) => {
    // const uniqRow = new Set(row);
    // return uniqRow.size === n;
    for (let k = 1; k <= n; k++) {}
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

        // const column = data.map((e) => e[i]);
        // if (!isUniqueSet(column, n)) return false;

        // const square = data.map((e) => {
        //   console.log(Math.floor(i / 3), Math.floor(data.indexOf(e) / 3));
        // });
        // if (!isUniqueSet(square, n)) return false;
      }

      return true;
    },
  };
};
