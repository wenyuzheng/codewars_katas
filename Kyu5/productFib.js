function productFib(prod) {
  // ...
}

function Fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return Fib(n - 1) + Fib(n - 2);
}

console.log(Fib(2) === 1);
console.log(Fib(3) === 2);
console.log(Fib(8) === 21);
console.log(Fib(10) === 55);
