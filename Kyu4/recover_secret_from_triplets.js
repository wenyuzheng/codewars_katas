var recoverSecret = function (triplets) {
  const letters = [...triplets[0]];

  for (let i = 1; i < triplets.length; i++) {
    let index;
    let existence = [false, false, false];
    for (let j = 0; j < triplets[i].length; j++) {
      const newIndex = letters.indexOf(triplets[i][j]);
      if (newIndex !== -1) {
        index = newIndex;
        existence[j] = true;
      }
    }
    console.log({ index, existence });
    if (index === undefined) {
      letters.push(...triplets[i]);
    } else {
      existence.forEach((e) => {
        if (e === false) {
        }
      });
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
    // ["a", "t", "s"],
    // ["h", "a", "p"],
    // ["t", "i", "s"],
    // ["w", "h", "s"],
  ])
); // "whatisup"
