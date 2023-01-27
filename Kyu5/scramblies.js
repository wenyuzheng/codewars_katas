function scramble(str1, str2) {
  for (let i = 0; i < str2.length; i++) {
    console.log(str1.indexOf(str2[i]));
    if (!str1.includes(str2[i])) return false;
    str1 = str1.replace(str2[i], "");
  }
  return true;
}

// console.log(scramble("rkqodlw", "world")); // true
// console.log(scramble("cedewaraaossoqqyt", "codewars")); // true
console.log(scramble("katas", "steak")); // false
