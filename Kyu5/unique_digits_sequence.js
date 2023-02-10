function findNum(n) {
  return uniqueSeq(0, 500)[n];
}

const hasOverlappingDigits = (n1, n2) => {
  const n1Digits = n1.toString().split("");
  const n2Digits = n2.toString().split("");

  let res = false;

  n1Digits.forEach((e1) => {
    n2Digits.forEach((e2) => {
      if (e2 === e1) res = true;
    });
  });
  return res;
};

console.log(hasOverlappingDigits(1, 13));

const findNextNum = (currArr) => {
  const last = currArr[currArr.length - 1];

  let i = 1;
  while (true) {
    if (currArr.includes(i) || hasOverlappingDigits(i, last)) {
      i++;
    } else {
      return i;
    }
  }
};

// console.log(findNum(1)); // 1
// console.log(findNum(5)); // 5
// console.log(findNum(11)); // 22
// console.log(findNum(100)); // 103
// console.log(findNum(500)); // 476

console.log(findNextNum([25, 9, 13])); // 2
console.log(findNextNum([11, 9, 22, 15])); // 2
console.log(findNextNum([26, 2, 7, 18, 23])); // 1

const uniqueSeq = (startN, numOfTerms) => {
  const res = [startN];
  for (let i = 1; i < numOfTerms - 1; i++) {
    const nextNum = findNextNum(res);
    res.push(nextNum);
  }
  return res;
};

console.log(uniqueSeq(1, 502)[500]);
// 0,1,2,3,4,5,6,7,8,9,10,22,11,20,13,24...

// const findNum = (n) => {
//   const seq = [
//     0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 22, 11, 20, 13, 24, 15, 23, 14, 25, 16,
//     27, 18, 26, 17, 28, 19, 30, 12, 33, 21, 34, 29, 31, 40, 32, 41, 35, 42, 36,
//     44, 37, 45, 38, 46, 39, 47, 50, 43, 51, 48, 52, 49, 53, 60, 54, 61, 55, 62,
//     57, 63, 58, 64, 59, 66, 70, 56, 71, 65, 72, 68, 73, 69, 74, 80, 67, 81, 75,
//     82, 76, 83, 77, 84, 79, 85, 90, 78, 91, 86, 92, 87, 93, 88, 94, 100, 89,
//     101, 95, 102, 96, 103,
//   ];

//   return seq[n];
// };
