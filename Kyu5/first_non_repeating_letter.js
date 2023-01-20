function firstNonRepeatingLetter(s) {
  let letters = {};
  s.split("").forEach((e) => {
    const letter = e.toLowerCase();
    return letters.hasOwnProperty(letter)
      ? (letters[letter] += 1)
      : (letters[letter] = 1);
  });

  let firstLetter = "";
  for (const key in letters) {
    if (letters[key] === 1) {
      firstLetter = s[s.toLowerCase().indexOf(key)];
      break;
    }
  }

  return firstLetter;
}

console.log(firstNonRepeatingLetter("a")); //"a"
console.log(firstNonRepeatingLetter("stress")); //"t"
console.log(firstNonRepeatingLetter("sTreSS")); //"T"
