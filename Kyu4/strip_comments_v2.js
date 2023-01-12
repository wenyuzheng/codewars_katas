function solution(input, markers) {
  const results = [];

  input.split("\n").map((line) => {
    for (let j = 0; j < markers.length; j++) {
      let markerIndex = line.indexOf(markers[j]);
      line = markerIndex === -1 ? line : line.substring(0, markerIndex);
    }
    results.push(line.trim());
  });

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
