function sumIntervals(intervals) {}

function addOneInterval(existing, newIn) {
  if (existing.length === 0) {
    return [newIn];
  }
  let add = newIn;
  existing.forEach((e) => {
    if (e[0] <= newIn[0] && newIn[0] <= e[1] && e[1] <= newIn[1]) {
      add = [e[1], newIn[1]];
    } else if (newIn[0] < e[0] && e[0] <= newIn[1]) {
      add = [newIn[0], e[0]];
    } else if (e[0] <= newIn[0] && newIn[1] <= e[1]) {
      add = [0, 0];
    }
  });
  existing.push(add);
  existing.sort((a, b) => a[0] - b[0]);

  return existing;
}

// [
//   [-10, -6], //->  [[-10,-6]]
//   [9, 16], //->  [[-10,-6],[9,16]]
//   [10, 18], //->   [[-10,-6],[9,18]]
//   [-1, 4], //-> [[-10,-6],[-1, 4],[9,18]]
//   [13, 22], //-> [[-10,-6],[-1, 4],[9,22]]
//   [-17, -8], //-> [[-17,-6],[-1, 4],[9,22]]
//   [-3, 7], //-> [[-17,-6],[-1, 7],[9,22]]
//   [-1, 6], //-> [[-17,-6],[-1, 7],[9,22]]
// ];

console.log(addOneInterval([], [-10, -6])); // [[-10, -6]]
console.log(
  addOneInterval(
    [
      [1, 2],
      [6, 7],
      [10, 11],
    ],
    [8, 9]
  )
); // [[-10,-6],[9,16]]
console.log(
  addOneInterval(
    [
      [1, 2],
      [6, 7],
      [10, 11],
    ],
    [6.5, 9]
  )
); // [[1, 2],[6, 9],[10, 11]]
// [[1, 2],[6, 7],[7,9],[10, 11]]

console.log(
  addOneInterval(
    [
      [1, 2],
      [6, 7],
      [10, 11],
    ],
    [8, 10.5]
  )
); // [[1, 2],[6, 7],[8, 10],[10, 11]]

console.log(
  addOneInterval(
    [
      [1, 2],
      [6, 7],
      [10, 11],
    ],
    [6.5, 6.6]
  )
); // [[1, 2],[6, 7],[10, 11]]

console.log(
  addOneInterval(
    [
      [1, 2],
      [6, 7],
      [10, 11],
    ],
    [5.5, 7.5]
  )
); // [[1, 2],[5.5, 6],[6, 7],[10, 11]]
console.log(
  addOneInterval(
    [
      [1, 2],
      [6, 7],
      [10, 11],
    ],
    [1.5, 8.5]
  )
); // [[1, 2],[5.5, 6],[6, 7],[10, 11]]
// console.log(
//   addOneInterval(
//     [
//       [1, 2],
//       [6, 7],
//       [10, 11],
//     ],
//     [0, 12]
//   )
// ); // [[-10,-6],[9,16]]

// console.log(
//   sumIntervals([
//     [-10, -6],
//     [9, 16],
//     [10, 18],
//     [-1, 4],
//     [13, 22],
//     [-17, -8], // 29
//     [-3, 7],
//     // [-1, 6],
// ])
// ); // 34
