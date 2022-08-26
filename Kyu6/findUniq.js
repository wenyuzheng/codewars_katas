// function findUniq(arr) {
//   if (arr[0] !== arr[1] && arr[0] !== arr[2]) return arr[0];
//   if (arr[1] !== arr[0] && arr[1] !== arr[2]) return arr[1];
//   if (arr[2] !== arr[0] && arr[2] !== arr[1]) return arr[2];
//   for (let i = 3; i < arr.length; i++) {
//     if (arr[i] !== arr[0]) return arr[i];
//   }
// }

function findUniq(arr) {
  return arr.find((e) => arr.indexOf(e) === arr.lastIndexOf(e));
}
