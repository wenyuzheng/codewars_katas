function nextBigger(n) {
  const digits = n.toString().split("").reverse();

  if (digits.length === 1) return -1;

  for (let i = 1; i < digits.length; i++) {
    if (digits[i - 1] > digits[i]) {
      [digits[i - 1], digits[i]] = [digits[i], digits[i - 1]];
      return parseInt(digits.reverse().join(""));
    }
  }
  return -1;
}

console.log(nextBigger(9)); // -1
console.log(nextBigger(111)); // -1
console.log(nextBigger(531)); // -1

console.log(nextBigger(12)); // 21
console.log(nextBigger(513)); // 531
console.log(nextBigger(2017)); // 2071
console.log(nextBigger(414)); // 441
console.log(nextBigger(144)); // 414
