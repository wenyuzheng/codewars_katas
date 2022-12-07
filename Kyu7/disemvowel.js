function disemvowel(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < vowels.length; i++) {
    str = str.split(vowels[i]).join("");
    str = str.split(vowels[i].toUpperCase()).join("");
  }
  console.log(str);
  return str;
}
