function digitalRoot(n) {
  const sum = n
    .toString()
    .split("")
    .map((e) => parseInt(e))
    .reduce((a, b) => {
      return a + b;
    });

  if (sum < 10) {
    return sum;
  }
  return digitalRoot(sum);
}

// function digital_root(n) {
//   return ((n - 1) % 9) + 1;
// }
