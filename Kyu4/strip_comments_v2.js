function solution(input, markers) {
  const inputLines = input.split("\n");
  const results = [];

  // console.log({ inputLines });

  for (let i = 0; i < inputLines.length; i++) {
    let markerIndex = inputLines[i].indexOf(markers[0]);
    if (markerIndex === -1) {
      markerIndex = inputLines[i].length;
    }
    results.push(inputLines[i].substring(0, markerIndex).trim());
  }

  // console.log({ results });

  return results.join("\n");
}

console.log(solution("test!delete me", ["!"]) === "test"); // test
console.log(
  solution("test1!delete me\ntest2!delete me", ["!"]) === "test1\ntest2"
); // test1\ntest2
console.log(solution("tes!delete me\ntest2!delete me", ["!"]) === "tes\ntest2"); // tes\ntest2
console.log(
  solution("tes   !delete me  \ntest2!delete me", ["!"]) === "tes\ntest2"
); // tes\ntest2
console.log(solution("tes     \ntest2!delete me", ["!"]) === "tes\ntest2"); // tes\ntest2
