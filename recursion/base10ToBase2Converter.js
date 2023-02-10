// const base10ToBase2Converter = (num, res = 0) => {
//   if (num === 0) return res;
//   let i = 0;
//   while (true) {
//     if (num < 2 ** i) {
//       res += 10 ** (i - 1);
//       num -= 2 ** (i - 1);
//       return base10ToBase2Converter(num, res);
//     }
//     i++;
//   }
// };

const base10ToBase2Converter = (num, res = []) => {
  if (num === 0) return parseInt(res.join(""));

  res = [num % 2, ...res];
  num = Math.floor(num / 2);
  return base10ToBase2Converter(num, res);
};

console.log(base10ToBase2Converter(9)); // 1001
console.log(base10ToBase2Converter(25)); // 11001
console.log(base10ToBase2Converter(33)); // 100001

// 110101 = 1+ 4+16+32
// 100000 = 32
// 16 10000 25 - 16 = 9
// 8 1000 9 -8 =1
// 1 1 1-1 =0
// 11001 = 10000+1000+1
