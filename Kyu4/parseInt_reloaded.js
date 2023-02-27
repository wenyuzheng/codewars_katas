const numStrings = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
  hundred: 100,
  thousand: 1000,
};

function parseInt(string) {
  return string
    .split(" ")
    .filter((x) => x !== "and")
    .map((e) => numStrings[e]);
}

// console.log(parseInt("one")); // 1
// console.log(parseInt("twenty")); // 20
console.log(parseInt("two hundred forty-six")); // 246
console.log(
  parseInt("seven hundred eighty-three thousand nine hundred and nineteen")
); // 783919
