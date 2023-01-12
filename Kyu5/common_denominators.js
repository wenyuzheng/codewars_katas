function convertFrac(lst) {
  const test = lst.map((e) => "(" + e[0] + "," + e[1] + ")");
  console.log({ test });
  return test.join("");
}

console.log(convertFrac([[1, 2]]) === "(1,2)"); // (1,2)
console.log(
  convertFrac([
    [1, 2],
    [1, 3],
  ]) === "(1,2)(1,3)"
); // test for format: (1,2)(1,3)
// console.log(convertFrac([[1, 2], [1, 3], [1, 4]])); // (6,12)(4,12)(3,12)
