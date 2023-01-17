function rot13(message) {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return message
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((letter) => {
          const index = alphabet.indexOf(letter.toUpperCase());
          if (index === -1) return letter;
          const rotIndex = index < 13 ? index + 13 : index - 13;
          const rotLetter = alphabet[rotIndex];
          return letter === letter.toLowerCase()
            ? rotLetter.toLowerCase()
            : rotLetter;
        })
        .join("")
    )
    .join(" ");
}

// console.log(rot13("a")); //n
// console.log(rot13("test")); //grfg
// console.log(rot13("Test")); //Grfg
console.log(rot13("Ruby is cool!")); // Ehol vf pbby!
console.log(rot13("k#/^~6m.N,.K{2Y")); // x#/^~6z.A,.X{2L
