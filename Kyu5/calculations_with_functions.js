const numGen = (num) => (a) => a ? a(num) : num;

const zero = numGen(0);
const one = numGen(1);
const two = numGen(2);
const three = numGen(3);
const four = numGen(4);
const five = numGen(5);
const six = numGen(6);
const seven = numGen(7);
const eight = numGen(8);
const nine = numGen(9);

const plus = (a) => (b) => a + b;
const minus = (a) => (b) => b - a;
const dividedBy = (a) => (b) => Math.floor(b / a);
const times = (a) => (b) => a * b;

console.log(seven(times(five()))); //35
console.log(seven(times(four()))); //28
console.log(seven(times(eight()))); //56
console.log(seven(times(seven()))); //49
console.log(seven(plus(five()))); //12
console.log(seven(plus(seven()))); //14
console.log(seven(dividedBy(five()))); //1
console.log(seven(minus(seven()))); //0
