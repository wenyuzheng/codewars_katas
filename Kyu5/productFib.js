function productFib(prod) {
  let n = 0;
  let n1 = 1;

  while (n * n1 < prod) {
    next = n + n1;
    n = n1;
    n1 = next;
  }

  return [n, n1, n * n1 === prod];
}

// console.log(Fib(2) === 1);
// console.log(Fib(3) === 2);
// console.log(Fib(8) === 21);
// console.log(Fib(10) === 55);

console.log(productFib(0)); // [0,1,true]
