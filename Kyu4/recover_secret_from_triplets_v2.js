var recoverSecret = function (triplets) {
  let secret = [];
  while (triplets.length !== 0) {
    let letter;
    triplets.forEach((triplet) => {
      letter = triplet[0];
      for (let i = 0; i < triplets.length; i++) {
        if (triplets[i].indexOf(letter) > 0) {
          letter = "";
          break;
        }
      }

      if (letter !== "") {
        secret.push(letter);
        triplet.shift();
      }
    });
    triplets = triplets.filter((e) => e.length !== 0);
  }
  return [...new Set(secret)].join("");
};

// 1. Find the first letter
// 2. Remove the first letter from all triplets
// 3. Repeat until all triplets are empty

console.log(
  recoverSecret([
    ["t", "u", "p"],
    ["w", "h", "i"],
    ["t", "s", "u"],
    ["a", "t", "s"],
    ["h", "a", "p"],
    ["t", "i", "s"],
    ["w", "h", "s"],
  ])
); // "whatisup"
