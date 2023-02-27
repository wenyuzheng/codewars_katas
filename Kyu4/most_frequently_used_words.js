// function topThreeWords(text) {
//   const strArr = text
//     .split(" ")
//     .map((e) => e.toLowerCase().replace(/[^a-z']|/g, ""))
//     .filter((x) => x !== "'" && x !== "");

//   if (strArr.length <= 1) return strArr;

//   let strCount = {};
//   strArr.forEach((e) => {
//     strCount[e] = strCount[e] ? strCount[e] + 1 : 1;
//   });

//   const sorted = Object.keys(strCount).sort(
//     (a, b) => strCount[b] - strCount[a]
//   );

//   return sorted.slice(0, 3);
// }

function topThreeWords(text) {
  let words = {};

  // Match regex (word that starts with a-z and may have more than 1 a-z)
  // If matched => count appearances
  text
    .toLowerCase()
    .replace(
      /([a-z][a-z']*)/g,
      (match) => (words[match] = words[match] ? words[match]++ : 1)
    );

  return Object.keys(words)
    .sort((a, b) => words[b] - words[a])
    .slice(0, 3);
}

console.log(topThreeWords("a a a  b  c c  d d d d  e e e e e")); // ["e","d","a"]
console.log(topThreeWords("a a c b b")); // ['a','b','c']
console.log(
  topThreeWords("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
); // ['e','ddd','aa']
console.log(topThreeWords("  //wont won't won't ")); // ["won't", "wont"]
console.log(topThreeWords("  , e   .. ")); // ["e"]
console.log(topThreeWords("  '  ")); // []
console.log(topThreeWords("  ...  ")); // []
