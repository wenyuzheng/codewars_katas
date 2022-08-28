function high(x) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let map = {};
  for (let i = 0; i < alphabet.length; i++) {
    map[alphabet[i]] = i + 1;
  }
  let highest = 0;
  let highestWord = "";

  x.split(" ").forEach((word) => {
    let sum = 0;
    word.split("").map((letter) => {
      sum += map[letter];
    });
    if (sum > highest) {
      highest = sum;
      highestWord = word;
    }
  });
  return highestWord;
}
