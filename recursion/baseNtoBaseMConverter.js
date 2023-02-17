// const baseNToBaseMConverter = (num, n, m, res = 0) => {
//   // if (num == 0) return parseInt(res.join(""));
//   if (num == 0) return res;

//   let i = 0;
//   while (true) {
//     if (num < m ** i) {
//       // const tempRes = (res + n ** (i - 1)) % m === 0 ? 10 : res + n ** (i - 1);
//       // console.log({ tempRes });
//       res += n ** (i - 1);
//       num -= n ** (i - 1);

//       console.log({ res });
//       console.log({ num });

//       return baseNToBaseMConverter(num, n, m, res);
//     }
//     i++;
//   }
// };

// const baseNToBaseMConverter = (num, n, m) => {
//   // base n -> base 10 -> base m

// let sum = 0;
// const numDigits = num.toString().split("").reverse();
// for (let i = 0; i < numDigits.length; i++) {
//   sum += parseInt(numDigits[i]) * n ** i;
// }

//   let res = [];
// while (sum !== 0) {
//   res = [sum % m, ...res];
//   sum = Math.floor(sum / m);
// }

//   return parseInt(res.join(""));
// };

const baseNToBaseMConverter = (num, n, m, res = 0) => {
  // base n -> base 10 -> base m

  if (num === 0) {
    return res;
  }

  // if (num === 0) {
  //   if (res % m === 0) {
  //     let final = [];
  //     while (res !== 0) {
  //       final = [res % m, ...final];
  //       res = Math.floor(res / m);
  //     }
  //     return parseInt(final.join(""));
  //   } else {
  //     return res;
  //   }
  // }

  let decimal = 0;
  const digits = num.toString().split("");
  decimal += n ** (digits.length - 1) * parseInt(digits.shift());

  // res += decimal % m;
  // if (res % m === 0) {
  //   console.log({ res });
  // }

  // num = digits.length === 0 ? 0 : parseInt(digits.join(""));

  console.log({ decimal });
  // console.log({ res });
  // console.log({ num });

  return baseNToBaseMConverter(num, n, m, res);
};

const baseNToBase10 = (num, baseN) => {
  let sum = 0;
  const numDigits = num.toString().split("").reverse();
  for (let i = 0; i < numDigits.length; i++) {
    sum += parseInt(numDigits[i]) * baseN ** i;
  }
  return sum;
};

// console.log(baseNToBase10(101, 2)); // 5
// console.log(baseNToBase10(123, 5)); // 38

const base10ToBaseM = (num, m, res = []) => {
  if (num === 0) return parseInt(res.join(""));

  res = [num % m, ...res];
  num = Math.floor(num / m);
  return base10ToBaseM(num, m, res);
};

// console.log(base10ToBaseM(5, 2));
// console.log(base10ToBaseM(38, 5));

const baseNToBaseM = (num, n, m) => {
  const base10 = baseNToBase10(num, n);
  const baseM = base10ToBaseM(base10, m);

  return baseM;
};

// console.log(baseNToBaseM(101, 2, 5));
// console.log(baseNToBaseM(38, 5));

console.log(baseNToBaseM(101, 2, 5)); // 10
console.log(baseNToBaseM(1010, 2, 5)); // 20
console.log(baseNToBaseM(101, 2, 3)); // 12
console.log(baseNToBaseM(100, 2, 5)); // 4
console.log(baseNToBaseM(1000, 2, 5)); // 13

// 101 5

// 101 = 100 + 1
// 100 base2 = 04 base5
// 1 base2 = 01 base5
// 01 + 04 = 10 base5

// 101 = 100 + 1
// 100 base2 = 11 base3
// 1 base2 = 1 base3
