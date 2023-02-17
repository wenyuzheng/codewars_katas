// 20211 base3
// 20000 = 2*(3**4) => 162 base10
// 200 = 2*(3**2) => 18 base10
// 10 = 3**1 => 3 base10
// 1 = 3**0 => 1 base10

// const base10ToBase3Converter = (num, res = 0) => {
//   if (num === 0) return res;

//   let i = 0;
//   while (num >= 3 ** i) i++;
//   return base10ToBase3Converter(num - 3 ** (i - 1), res + 10 ** (i - 1));
// };

const base10ToBase3Converter = (num, m, res = []) => {
  if (num === 0) return parseInt(res.join(""));

  res = [num % m, ...res];
  num = Math.floor(num / m);
  return base10ToBase3Converter(num, m, res);
};

console.log(base10ToBase3Converter(1, 3)); // 1
console.log(base10ToBase3Converter(3, 3)); // 10
console.log(base10ToBase3Converter(18, 3)); // 200
console.log(base10ToBase3Converter(162, 3)); // 20000
