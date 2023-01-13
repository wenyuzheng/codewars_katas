function zero() {}
function one() {}
function two() {}
function three() {}
function four() {
  return 4;
}
function five() {
  return 5;
}
function six() {}
function seven(str = "7") {
  if (str[0] === "+") {
    return 7 + Number(str[1]);
  }
  if (str[0] === "*") {
    return 7 * Number(str[1]);
  }

  return 7;
}
function eight() {
  return 8;
}
function nine() {}

function plus(number) {
  return "+" + number;
}
function minus() {}
function times(number) {
  return "*" + number;
}
function dividedBy() {}

console.log(seven(times(five()))); //35
console.log(seven(times(four()))); //28
console.log(seven(times(eight()))); //56
console.log(seven(times(seven()))); //49
console.log(seven(plus(five()))); //12
