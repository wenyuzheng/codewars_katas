// const maxSubSqueSumFromStart = (sque) => {
//   const squeCopy = [...sque];
//   let sum = squeCopy.shift();
//   let sumNegative = 0;
//   while (squeCopy.length > 0) {
//     const a = squeCopy.shift();
//     const b = squeCopy.shift();
//     sumNegative += a + b;
//     if (sumNegative > 0) {
//       sum += sumNegative;
//       sumNegative = 0;
//     }
//   }
//   return sum;
// };

// const standardise = (sque) => {
//   const squeCopy = [...sque];
//   let res = [squeCopy.shift()];
//   while (squeCopy.length > 0) {
//     const curr = squeCopy.shift();
//     if (
//       (res[res.length - 1] <= 0 && curr <= 0) ||
//       (res[res.length - 1] > 0 && curr > 0)
//     ) {
//       res[res.length - 1] += curr;
//     } else {
//       res.push(curr);
//     }
//   }
//   if (res[0] < 0) res.shift();
//   if (res[res.length - 1] < 0) res.pop();

//   return res;
// };

// const maxSequence = (sque) => {
//   const standardised = standardise(sque);
//   let currMax = 0;
//   for (let i = 0; i < standardised.length; i += 2) {
//     const subSque = [...standardised].splice(i);
//     const sum = maxSubSqueSumFromStart(subSque);
//     if (sum > currMax) {
//       currMax = sum;
//     }
//   }
//   return currMax;
// };

// console.log(
//   maxSequence([
//     3, -43, -28, -32, 9, 15, -29, -36, 20, 42, -33, -28, -26, 43, 0, 3, 8, -5,
//     -19, 47, 15, 46, 28, 0, -1, 28, 36, -4, 32, 47, 48, -25, -15, -17, 45, 42,
//     20, 26, 17, -22, 32, 4, -43, -32, 11, -24,
//   ])
// ); // 459

const maxSequence = (arr) => {
  let currentSum = 0;
  return arr.reduce(function (maxSum, number) {
    currentSum = Math.max(currentSum + number, 0);
    return Math.max(currentSum, maxSum);
  }, 0);
};

console.log(
  maxSequence([
    3, -43, -28, -32, 9, 15, -29, -36, 20, 42, -33, -28, -26, 43, 0, 3, 8, -5,
    -19, 47, 15, 46, 28, 0, -1, 28, 36, -4, 32, 47, 48, -25, -15, -17, 45, 42,
    20, 26, 17, -22, 32, 4, -43, -32, 11, -24,
  ])
); // 459
