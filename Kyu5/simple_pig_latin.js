function pigIt(str) {
  return str
    .split(" ")
    .map((word) => {
      if (word.toLowerCase() === word.toUpperCase()) return word;
      else return word.replace(word[0], "") + word[0] + "ay";
    })
    .join(" ");
}

console.log(pigIt("Pig")); // igPay
console.log(pigIt("Pig latin is cool")); // igPay atinlay siay oolcay
console.log(pigIt("Hello world !")); // elloHay orldway !
