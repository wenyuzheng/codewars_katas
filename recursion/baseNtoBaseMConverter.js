// const baseNToBaseMConverter = (num, n, m, res = 0) => {
//   // if (num == 0) return parseInt(res.join(""));
//   if (num == 0) return res;

//   let i = 0;
//   while (true) {
//     if (num < m ** i) {
//       // const tempRes = (res + n ** (i - 1)) % m === 0 ? 10 : res + n ** (i - 1);
//       // console.log({ tempRes });
//       res += n ** (i - 1);
//       num -= m ** (i - 1) * n ** (i - 1);
//       return baseNToBaseMConverter(num, n, m, res);
//     }
//     i++;
//   }
// };

const baseNToBaseMConverter = (num, n, m) => {
  // base n -> base 10 -> base m

  let sum = 0;
  const numDigits = num.toString().split("").reverse();
  for (let i = 0; i < numDigits.length; i++) {
    sum += parseInt(numDigits[i]) * n ** i;
  }

  let res = [];
  while (sum !== 0) {
    res = [sum % m, ...res];
    sum = Math.floor(sum / m);
  }

  return parseInt(res.join(""));
};

console.log(baseNToBaseMConverter(101, 2, 5)); // 10
console.log(baseNToBaseMConverter(101, 2, 3)); // 12

console.log(baseNToBaseMConverter(100, 2, 5)); // 4
console.log(baseNToBaseMConverter(1000, 2, 5)); // 13

// 101 5

// 101 = 100 + 1
// 100 base2 = 04 base5
// 1 base2 = 01 base5
// 01 + 04 = 10 base5

// 101 = 100 + 1
// 100 base2 = 11 base3
// 1 base2 = 1 base3
