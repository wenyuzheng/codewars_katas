function topThreeWords(text) {
  const newText = text.replace(/[^a-z]/g, " ");
  //   if (newText.length === 0) return [];
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
