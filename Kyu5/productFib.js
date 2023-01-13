function productFib(prod) {
  let n = 0;
  let n1 = 1;

  while (n * n1 < prod) {
    if (Fib(n) * Fib(n + 1) === prod) {
      return [Fib(n), Fib(n + 1), true];
    }
    n1 = n1;

    n = n1;
  }

  return [Fib(n), Fib(n + 1), false];
}

function Fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return Fib(n - 1) + Fib(n - 2);
}

// console.log(Fib(2) === 1);
// console.log(Fib(3) === 2);
// console.log(Fib(8) === 21);
// console.log(Fib(10) === 55);

console.log(productFib(0)); // [0,1,true]
