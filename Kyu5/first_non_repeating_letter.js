function firstNonRepeatingLetter(s) {
  let letters = {};
  s.split("").forEach((e) => {
    letters.hasOwnProperty(e) ? (letters[e] += 1) : (letters[e] = 1);
  });

  let firstLetter = "";
  for (const key in letters) {
    if (letters[key] === 1) {
      firstLetter = key;
      break;
    }
  }

  return firstLetter;
}

console.log(firstNonRepeatingLetter("a")); //"a"
console.log(firstNonRepeatingLetter("stress")); //"t"
