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
  thirty: 30,
  forty: 40,
  fifty: 50,
  sixty: 60,
  seventy: 70,
  eighty: 80,
  ninety: 90,
  hundred: 100,
  thousand: 1000,
};

function parseInt(string) {
  const numArr = string
    .replace("-", " ")
    .split(" ")
    .filter((x) => x !== "and")
    .map((e) => numStrings[e]);

  let sum = 0;
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === 100) {
      sum += numArr[i - 1] * 100;
      sum -= numArr[i - 1];
    } else {
      sum += numArr[i];
    }
  }

  return sum;
}

console.log(parseInt("one")); // 1
console.log(parseInt("twenty")); // 20
console.log(parseInt("two hundred forty-six")); // 246
// console.log(
//   parseInt("seven hundred eighty-three thousand nine hundred and nineteen")
// ); // 783919
