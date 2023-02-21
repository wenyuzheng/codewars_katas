var recoverSecret = function (triplets) {
  const letters = [...triplets[0]];

  for (let i = 1; i < triplets.length; i++) {
    let existence = [];
    triplets[i].forEach((letter) => {
      existence.push(letters.indexOf(letter) !== -1);
    });
    existence = existence.join();

    if (existence === "false,false,false") {
      letters.push(...triplets[i]);
    } else if (existence === "true,false,false") {
      const index = letters.indexOf(triplets[i][0]);
      letters.splice(index + 1, 0, triplets[i][1], triplets[i][2]);
    } else if (existence === "true,false,true") {
      const index = letters.indexOf(triplets[i][0]);
      letters.splice(index + 1, 0, triplets[i][1]);
    } else if (existence === "true,true,false") {
      const index = letters.indexOf(triplets[i][1]);
      letters.splice(index + 1, 0, triplets[i][2]);
    } else if (existence === "false,true,false") {
      const index = letters.indexOf(triplets[i][1]);
      letters.splice(index + 1, 0, triplets[i][2]);
      index === 0
        ? letters.unshift(triplets[i][0])
        : letters.splice(index - 1, 0, triplets[i][0]);
    } else if (existence === "false,true,true") {
      const index = letters.indexOf(triplets[i][1]);
      index === 0
        ? letters.unshift(triplets[i][0])
        : letters.splice(index, 0, triplets[i][0]);
    } else if (existence === "false,false,true") {
      const index = letters.indexOf(triplets[i][2]);

      index === 0
        ? letters.unshift(triplets[i][0], triplets[i][1])
        : letters.splice(index, 0, triplets[i][0], triplets[i][1]);
    }
  }

  console.log({ letters });
};

// case 1: [not, not, not] -> push all to back
// case 2: [exist, not, not] -> index = letters.indexOf(triplets[0]) -> push [1],[2] to index + 1
// case 2.1: [exist, not, exist] -> index = letters.indexOf(triplets[0]) -> push [1] to index + 1
// case 2.2: [exist, exist, not] -> index = letters.indexOf(triplets[1]) -> push [2] to index + 1
// case 3: [not, exist, not] -> index = letters.indexOf(triplets[1]) -> push [0] to index - 1, [2] to index + 1
// case 3.1: [not, exist, exist] -> index = letters.indexOf(triplets[1]) -> push [0] to index - 1
// case 4: [not, not, exist] -> index = letters.indexOf(triplets[2]) -> push [0],[1] to index - 1

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
