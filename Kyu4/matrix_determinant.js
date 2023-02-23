function determinant(m) {
  const n = m.length;
  if (n === 1) return m[0][0];
  if (n === 2) return m[0][0] * m[1][1] - m[0][1] * m[1][0];

  let sum = 0;
  for (let i = 0; i < n; i++) {
    const newM = m.map((e) => e.slice());
    newM.shift();
    newM.forEach((e) => e.splice(i, 1));

    i % 2 === 0
      ? (sum += m[0][i] * determinant(newM))
      : (sum -= m[0][i] * determinant(newM));
  }
  return sum;
}

// console.log(determinant([[1]])); // 1
// console.log(
//   determinant([
//     [4, 6],
//     [3, 8],
//   ])
// ); // 4*8 - 3*6 = 14
console.log(
  determinant([
    [2, 4, 2],
    [3, 1, 1],
    [1, 2, 0],
  ])
); // 2*-2 - 4*-1 + 2*5 = -4+4+10 = 10
