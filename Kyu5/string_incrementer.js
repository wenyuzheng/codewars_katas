function incrementString(strng) {
  let incrementedStr = (parseInt(strng) + 1).toString();
  if (incrementedStr.length < strng.length) {
    incrementedStr = incrementedStr.padStart(strng.length, "0");
  }

  return incrementedStr;
}

console.log(incrementString("1")); // "2"
console.log(incrementString("009")); // "010"
// console.log(incrementString("foo")); // "foo1"
