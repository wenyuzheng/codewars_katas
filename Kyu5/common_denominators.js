function convertFrac(lst) {
  const denominator = lst.reduce((a, b) => {
    return lcm(a, b[1]);
  }, 1);

  return lst
    .map((e) => "(" + (denominator / e[1]) * e[0] + "," + denominator + ")")
    .join("");
}

function gcd(a, b) {
  return b ? gcd(b, a % b) : a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// console.log(gcd(1, 2)); // 1
// console.log(gcd(3, 2)); // 1
// console.log(gcd(3, 6)); // 3
// console.log(gcd(2, 8)); // 2

// console.log(lcm(3, 6)); // 6
// console.log(lcm(2, 3)); // 6
// console.log(lcm(6, 4)); // 12

console.log(convertFrac([[1, 2]]) === "(1,2)"); // (1,2)
console.log(
  convertFrac([
    [1, 2],
    [1, 3],
  ]) === "(3,6)(2,6)"
); // (3,6)(2,6)
console.log(
  convertFrac([
    [1, 2],
    [1, 3],
    [1, 4],
  ]) === "(6,12)(4,12)(3,12)"
); // (6,12)(4,12)(3,12)
console.log(
  convertFrac([
    [1, 12],
    [1, 12],
    [1, 12],
  ]) === "(1,12)(1,12)(1,12)"
); // (1,12)(1,12)(1,12)
console.log(
  convertFrac([
    [2, 3],
    [1, 3],
    [1, 4],
  ]) === "(8,12)(4,12)(3,12)"
); // (8,12)(4,12)(3,12)
console.log(
  convertFrac([
    [2, 4],
    [2, 6],
    [2, 8],
  ])
); // (6,12)(4,12)(3,12)
console.log(
  convertFrac([
    [1390.6153846153845, 2620],
    [174, 2620],
    [1965, 2620],
  ])
); // (18078,34060)(2262,34060)(25545,34060)

// expected '(1390.6153846153845,2620)(174,2620)(1965,2620)' to equal '(18078,34060)(2262,34060)(25545,34060)'
