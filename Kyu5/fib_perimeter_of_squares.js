function perimeter(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += fib(i);
  }
  return 4 * sum;
}

function fib(n) {
  if (n === 0 || n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(5));

console.log(perimeter(0)); // 4
console.log(perimeter(5)); // 80
console.log(perimeter(7)); // 216
console.log(perimeter(20)); // 114624
console.log(perimeter(30)); // 14098308
