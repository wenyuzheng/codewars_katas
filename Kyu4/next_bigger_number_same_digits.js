function nextBigger(n) {
  const digits = n.toString().split("").reverse();

  if (digits.length === 1) return -1;

  for (let i = 1; i < digits.length; i++) {
    if (digits[i - 1] > digits[i]) {
      const arr = digits.slice(0, i);
      const smallest = arr.filter((e) => e > digits[i])[0];
      arr.splice(arr.indexOf(smallest), 1, digits[i]);
      digits[i] = smallest;
      const newArr = arr.sort((a, b) => b - a);
      digits.splice(0, i, ...newArr);

      return parseInt(digits.reverse().join(""));
    }
  }
  return -1;
}

// 1. find the digit i that i-1 > i  => 5988484845(i)9(i-1)853
// 2. separate i and onwards  => [598848484][59853]
// 3. find the smallest digit larger than i  => [5, 9853] 8 > 5
// 4. digits[i] = smallest digit, reorder the rest  => [8, 3559]
// 5. join all  => 59884848483559

// console.log(nextBigger(9)); // -1
// console.log(nextBigger(111)); // -1
// console.log(nextBigger(531)); // -1

// console.log(nextBigger(12)); // 21
// console.log(nextBigger(513)); // 531
// console.log(nextBigger(2017)); // 2071
// console.log(nextBigger(414)); // 441
// console.log(nextBigger(144)); // 414
// console.log(nextBigger(1234567890)); // 1234567908
console.log(nextBigger(59884848459853)); // 59884848483559
