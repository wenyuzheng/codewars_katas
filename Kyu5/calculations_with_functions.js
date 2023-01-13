const numberFuncGen = (n) => {
  return (str) => {
    if (str === undefined) {
      return n;
    }
    if (str[0] === "+") {
      return n + Number(str[1]);
    }
    if (str[0] === "*") {
      return n * Number(str[1]);
    }
    if (str[0] === "-") {
      return n - Number(str[1]);
    }
    if (str[0] === "/") {
      return Math.floor(n / Number(str[1]));
    }
  };
};

const zero = numberFuncGen(0);
const one = numberFuncGen(1);
const two = numberFuncGen(2);
const three = numberFuncGen(3);
const four = numberFuncGen(4);
const five = numberFuncGen(5);
const six = numberFuncGen(6);
const seven = numberFuncGen(7);
const eight = numberFuncGen(8);
const nine = numberFuncGen(9);

const operatorGen = (o) => (n) => o + n;

const plus = operatorGen("+");
const minus = operatorGen("-");
const times = operatorGen("*");
const dividedBy = operatorGen("/");

console.log(seven(times(five()))); //35
console.log(seven(times(four()))); //28
console.log(seven(times(eight()))); //56
console.log(seven(times(seven()))); //49
console.log(seven(plus(five()))); //12
console.log(seven(plus(seven()))); //14
console.log(seven(dividedBy(five()))); //1
console.log(seven(minus(seven()))); //0
