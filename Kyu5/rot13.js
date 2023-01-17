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
    .split("")
    .map((letter) => {
      const index = alphabet.indexOf(letter.toUpperCase());
      const rotIndex = index < 13 ? index + 13 : index - 13;
      const rotLetter = alphabet[rotIndex];
      return letter === letter.toLowerCase()
        ? rotLetter.toLowerCase()
        : rotLetter;
    })
    .join("");
}

console.log(rot13("a")); //n
console.log(rot13("test")); //grfg
console.log(rot13("Test")); //Grfg
