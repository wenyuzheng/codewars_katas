// Better version: using regex
// Two forward slash (/ /): specify the start and end of the regular expression
// ([]): specify a pattern that matches any of a specific group of characters, e.g. [aeiou] matches 'a', 'e', 'i', 'o', 'u'
// g: global regex flag to match all occurrences of the regex pattern
// i: ignore case flag
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

// Initial version:
// function disemvowel(str) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   for (let i = 0; i < vowels.length; i++) {
//     str = str.split(vowels[i]).join("");
//     str = str.split(vowels[i].toUpperCase()).join("");
//   }
//   console.log(str);
//   return str;
// }
