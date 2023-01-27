// Slow:
// function scramble(str1, str2) {
//   for (let i = 0; i < str2.length; i++) {
//     console.log(str1.indexOf(str2[i]));
//     if (!str1.includes(str2[i])) return false;
//     str1 = str1.replace(str2[i], "");
//   }
//   return true;
// }

// Faster:
// const countLetter = (str) => {
//   const letters = {};
//   str
//     .split("")
//     .forEach((s) => (letters[s] ? (letters[s] += 1) : (letters[s] = 1)));
//   return letters;
// };

// function scramble(str1, str2) {
//   const str1Letters = countLetter(str1);
//   const str2Letters = countLetter(str2);

//   for (const k in str2Letters) {
//     if (!str1Letters[k] || str1Letters[k] < str2Letters[k]) return false;
//   }
//   return true;
// }

const countLetter = (str) => {
  return str.split("").reduce((obj, curr) => {
    obj[curr] ? obj[curr]++ : (obj[curr] = 1);
    return obj;
  }, {});
};

function scramble(str1, str2) {
  const str1Letters = countLetter(str1);

  for (let i = 0; i < str2.length; i++) {
    const k = str2[i];
    if (!str1Letters[k] || str1Letters[k] === 0) return false;
    else str1Letters[k]--;
  }

  return true;
}

// console.log(scramble("rkqodlw", "world")); // true
// console.log(scramble("cedewaraaossoqqyt", "codewars")); // true
// console.log(scramble("katas", "steak")); // false
// console.log(scramble("scriptjavx", "javascript")); // false

// console.log(countLetter("katas"));
