function isInteresting(number, awesomePhrases) {
  if (number.toString().length < 3) return 0;

  // Criteria 1: Any digit followed by all zeros
  if (number.toString().match(/^[0-9]0+$/)) return 2;

  // Criteria 6: The digits match one of the values in the awesomePhrases array
  if (awesomePhrases.includes(number)) return 2;
  for (let i = 0; i < awesomePhrases.length; i++) {
    if (awesomePhrases[i] - 1 === number || awesomePhrases[i] - 2 === number) {
      res = 1;
      return 1;
    }
  }

  //   return number.toString().split("");

  return 0;
}

// console.log(isInteresting(3, [1337, 256])); // 0
// console.log(isInteresting(1336, [1337, 256])); // 1
// console.log(isInteresting(1337, [1337, 256])); // 2

console.log(isInteresting(10000, [])); // 2
console.log(isInteresting(11208, [1337, 256])); // 0
console.log(isInteresting(11209, [1337, 256])); // 1
console.log(isInteresting(11211, [1337, 256])); // 2
