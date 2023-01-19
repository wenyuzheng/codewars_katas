function generateHashtag(str) {
  const newStr = str.trim();
  if (newStr.length === 0) return false;
  const result =
    "#" +
    newStr
      .split(" ")
      .map((e) => {
        if (e === "") return "";
        return e[0].toUpperCase() + e.slice(1);
      })
      .join("");
  if (result.length > 140) return false;
  return result;
}

console.log(generateHashtag("")); // false
console.log(generateHashtag("    Hello     World   ")); // "#HelloWorld"
console.log(generateHashtag(" Hello there thanks for trying my Kata")); // "#HelloThereThanksForTryingMyKata"
