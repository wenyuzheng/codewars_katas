function solution(input, markers) {
  const inputLines = input.split("\n");
  const results = [];

  for (let i = 0; i < inputLines.length; i++) {
    results.push(inputLines[i].substring(0, input.indexOf(markers[0])));
  }

  return results.join("\n");
}

console.log([solution("test!delete me", ["!"])]); // test
console.log([solution("test1!delete me\ntest2!delete me", ["!"])]); // test1\ntest2
