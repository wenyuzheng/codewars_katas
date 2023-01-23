const singleDigitSum = (str) => {
  const sum = str.split("").reduce((a, b) => parseInt(a) + parseInt(b), 0);
  return sum;
};

console.log(singleDigitSum("11"));
