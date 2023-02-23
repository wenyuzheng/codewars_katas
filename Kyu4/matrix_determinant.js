function determinant(m) {
  const n = m.length;
  if (n === 1) return m[0][0];
  if (n === 2) return twoTimesTwoMatrix(m);
}

const twoTimesTwoMatrix = (matrix) => {
  return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
};

console.log(determinant([[1]])); // 1
console.log(
  determinant([
    [4, 6],
    [3, 8],
  ])
); // 4*8 - 3*6 = 14
console.log(
  determinant([
    [2, 4, 2],
    [3, 1, 1],
    [1, 2, 0],
  ])
); // 10
