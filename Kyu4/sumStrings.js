function sumStrings(a, b) {
  const sum = [];
  const maxLength = Math.max(a.length, b.length);

  const aDigits = a.split("").reverse();
  const bDigits = b.split("").reverse();

  let carryOver = 0;

  for (let i = 0; i < maxLength; i++) {
    const aNum = aDigits[i] === undefined ? 0 : parseInt(aDigits[i]);
    const bNum = bDigits[i] === undefined ? 0 : parseInt(bDigits[i]);

    const initSum = aNum + bNum + carryOver;
    let currDigit;
    if (initSum >= 10) {
      currDigit = initSum % 10;
      carryOver = 1;
    } else {
      currDigit = initSum;
      carryOver = 0;
    }
    sum.push(currDigit.toString());
  }
  if (carryOver !== 0) {
    sum.push(carryOver.toString());
  }
  return sum.reverse().join("");
}

// console.log(sumStrings("123", "12456")); // "12579"
// console.log(sumStrings("25", "39")); // "64"
console.log(sumStrings("800", "9567")); // 10367
