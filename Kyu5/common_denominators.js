function convertFrac(lst) {
  const test = lst.map((e) => "(" + e[0] + "," + e[1] + ")");
  console.log({ test });
  return test.join("");
}

function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(gcd(1, 2)); // 1
console.log(gcd(3, 2)); // 1
console.log(gcd(3, 6)); // 3

console.log(lcm(3, 6)); // 6
console.log(lcm(2, 3)); // 6
console.log(lcm(6, 4)); // 12

// console.log(convertFrac([[1, 2]]) === "(1,2)"); // (1,2)
// console.log(
//   convertFrac([
//     [1, 2],
//     [1, 3],
//   ]) === "(1,2)(1,3)"
// ); // test for format: (1,2)(1,3)
// console.log(
//   convertFrac([
//     [1, 2],
//     [1, 3],
//   ])
// ); // (3,6)(2,6)
// console.log(convertFrac([[1, 2], [1, 3], [1, 4]])); // (6,12)(4,12)(3,12)
