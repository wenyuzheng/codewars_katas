// function perimeter(n) {
//   let sum = 0;
//   let n1 = 1;
//   let n2 = 1;

//   for (let i = 0; i <= n; i++) {
//     // sum += fib(i);
//     sum += n1 + n2;
//     next = n2;
//     n2 = n1 + n2;
//     n1 = next;
//   }
//   return 4 * sum;
// }

function perimeter(n) {
  let sum = 1 + 1;
  return 4 * sum;
}

function fib(n) {
  if (n === 0 || n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(5));

console.log(perimeter(0)); // 4 (+4 = 4*1)
console.log(perimeter(1)); // 8 (+8 = 4*2)
// console.log(perimeter(2)); // 16 (+12 = 4*3)
// console.log(perimeter(3)); // 28 (+20 = 4*5)
// console.log(perimeter(4)); // 48 (+32 = 4*8)
// console.log(perimeter(5)); // 80
// console.log(perimeter(7)); // 216
// console.log(perimeter(20)); // 114624
// console.log(perimeter(30)); // 14098308
