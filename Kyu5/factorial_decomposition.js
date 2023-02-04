function decomp(n) {
  const primes = { 2: 0, 3: 0, 5: 0, 7: 0, 9: 0, 11: 0 };
  for (let i = 2; i <= n; i++) {
    // Object.keys(primes).reduce((k) => {
    //   if (i % k) primes[k]++;
    // });
  }
  let str = "";
  Object.keys(primes).reduce((k) => {
    if (primes[k] != 0) str += `${k}^${primes[k]} *`;
  });
  return str;
}

console.log(decomp(2)); // "2^1"
// console.log(decomp(5)); // "2^3 * 3 * 5"
