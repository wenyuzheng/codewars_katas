function incrementString(strng) {
  return strng.replace(/([0-8]|\d?9+)?$/, (e) => (e ? +e + 1 : 1));
  // const split = strng.match(/[a-zA-Z]+|[0-9]+/g);
  // if (split.length === 1 && !parseInt(split[0])) {
  //   return strng + "1";
  // }
  // const lastNumStr = split[split.length - 1];
  // let incrementedStr = (parseInt(lastNumStr) + 1).toString();
  // if (incrementedStr.length < lastNumStr.length) {
  //   incrementedStr = incrementedStr.padStart(lastNumStr.length, "0");
  // }
  // split[split.length - 1] = incrementedStr;

  // return split.reduce((a, b) => a + b);
}

console.log(incrementString("1")); // "2"
console.log(incrementString("009")); // "010"
console.log(incrementString("999")); // "1000"

console.log(incrementString("foo")); // "foo1"
console.log(incrementString("fo99obar0099")); // "fo99obar0100"
