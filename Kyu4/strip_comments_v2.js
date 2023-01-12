function solution(input, markers) {
  const inputLines = input.split("\n");
  const results = [];

  for (let i = 0; i < inputLines.length; i++) {
    let markerIndex = 0;
    let subLine = inputLines[i];

    for (let j = 0; j < markers.length; j++) {
      markerIndex = inputLines[i].indexOf(markers[j]);

      if (markerIndex === -1) {
        markerIndex = inputLines[i].length;
      }
      subLine = subLine.substring(0, markerIndex);
    }
    results.push(subLine.trim());
  }

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
console.log(
  solution("tes     \ntest2!delete me\nbefore%something", ["!", "%"]) ===
    "tes\ntest2\nbefore"
); // "tes\ntest2\nbefore"
