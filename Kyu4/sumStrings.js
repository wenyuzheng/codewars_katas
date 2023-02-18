const digitsSum = (a, b) => {
  const possibleRes = Array.from(Array(21).keys()).map((e) => e.toString());
  const possibleB = Array.from(Array(11).keys()).map((e) => e.toString());

  let removed;
  while (true) {
    removed = possibleRes.shift();
    if (removed === a) {
      break;
    }
  }
  if (b === "0") {
    return removed;
  }
  let res = possibleRes[0];
  while (true) {
    if (possibleB[0] === b) {
      break;
    } else {
      possibleB.shift();
      res = possibleRes.shift();
    }
  }

  return res;
};

function sumStrings(a, b) {
  const sum = [];
  const maxLength = Math.max(a.length, b.length);

  const aDigits = a.split("").reverse();
  const bDigits = b.split("").reverse();

  let carryOver = "0";

  for (let i = 0; i < maxLength; i++) {
    const aNum = aDigits[i] === undefined ? "0" : aDigits[i];
    const bNum = bDigits[i] === undefined ? "0" : bDigits[i];

    const initSum = digitsSum(digitsSum(aNum, bNum), carryOver);
    let currDigit;
    if (initSum.length > 1) {
      currDigit = initSum[1];
      carryOver = "1";
    } else {
      currDigit = initSum;
      carryOver = "0";
    }
    sum.push(currDigit);
  }
  if (carryOver !== "0") {
    sum.push(carryOver);
  }
  sum.reverse();
  while (sum[0] === "0") {
    sum.shift();
  }
  return sum.join("");
}

// console.log(sumStrings("123", "12456")); // "12579"
// console.log(sumStrings("25", "39")); // "64"
// console.log(sumStrings("800", "9567")); // "10367"
console.log(sumStrings("000103", "008567")); // "8670"
