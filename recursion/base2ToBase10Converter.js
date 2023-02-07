const base2ToBase10Converter = (num, i = 0, res = 0) => {
  if (num === 0) return res;

  const numArr = num.toString().split("");
  res += 2 ** i * parseInt(numArr.pop());
  num = numArr.length === 0 ? 0 : parseInt(numArr.join(""));
  i++;

  return base2ToBase10Converter(num, i, res);
};

// const base2ToBase10Converter = (num, res = 0) => {
//   const arr = num.toString().split("");
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += 2 ** (arr.length - 1 - i) * parseInt(arr[i]);
//   }
//   return sum;
// };

console.log(base2ToBase10Converter(1)); // 1
console.log(base2ToBase10Converter(10)); // 2
console.log(base2ToBase10Converter(11)); // 3
console.log(base2ToBase10Converter(100001)); // 33
