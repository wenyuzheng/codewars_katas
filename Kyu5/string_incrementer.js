function incrementString(strng) {
  const split = strng.match(/[a-zA-Z]+|[0-9]+/g);
  const lastNum = split[split.length - 1];
  let incrementedStr = (parseInt(lastNum) + 1).toString();
  if (incrementedStr.length < lastNum.length) {
    incrementedStr = incrementedStr.padStart(lastNum.length, "0");
  }

  split[split.length - 1] = incrementedStr;

  return split.reduce((a, b) => a + b);
}

console.log(incrementString("1")); // "2"
console.log(incrementString("009")); // "010"
console.log(incrementString("999")); // "1000"

// console.log(incrementString("foo")); // "foo1"
console.log(incrementString("fo99obar99")); // "fo99obar100"
