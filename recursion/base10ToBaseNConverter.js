// 2 <= N <= 10

const base10ToBaseNConverter = (num, base, res = 0) => {
  if (num === 0) return res;

  let i = 0;
  while (num >= base ** i) i++;
  return base10ToBaseNConverter(
    num - base ** (i - 1),
    base,
    res + 10 ** (i - 1)
  );
};

console.log(base10ToBaseNConverter(25, 2)); // 11001
console.log(base10ToBaseNConverter(33, 2)); // 100001
