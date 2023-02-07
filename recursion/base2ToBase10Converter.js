// const base2ToBase10Converter = (num, res = 0) => {
//   if (num === 0) return res;

//   let i = 0;
//   while (num >= 3 ** i) i++;
//   return base2ToBase10Converter(num - 3 ** (i - 1), res + 10 ** (i - 1));
// };

const base2ToBase10Converter = (num, res = 0) => {
  const arr = num.toString().split("");
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += 2 ** (arr.length - 1 - i) * parseInt(arr[i]);
  }
  return sum;
};

console.log(base2ToBase10Converter(1)); // 1
console.log(base2ToBase10Converter(10)); // 2
console.log(base2ToBase10Converter(11)); // 3
console.log(base2ToBase10Converter(100001)); // 33
