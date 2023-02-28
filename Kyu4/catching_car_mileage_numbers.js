// function isInteresting(number, awesomePhrases) {
//   const numberList = [number, number + 1, number + 2];

//   for (let i = 0; i < numberList.length; i++) {
//     if (numberList[i].toString().length < 3) continue;
//     if (validate(numberList[i], awesomePhrases) === true) {
//       if (i === 0) return 2;
//       else return 1;
//     }
//   }

//   return 0;
// }

// const validate = (number, awesomePhrases) => {
//   // Criteria 6: The digits match one of the values in the awesomePhrases array
//   if (awesomePhrases.includes(number)) return true;

//   // Criteria 1: Any digit followed by all zeros
//   // Criteria 2: Every digit is the same number
//   if (number.toString().match(/^[0-9]0+$|^(\d)\1+$/)) return true;

//   const digits = number.toString().split("");

//   // Criteria 3,4: The digits are sequential
//   if (isOrdered(digits, "+") === true) return true;
//   if (isOrdered(digits, "-") === true) return true;

//   // Criteria 5: The digits are a palindrome
//   if (number.toString() === digits.reverse().join("")) return true;

//   return false;
// };

// function isOrdered(numArr, order) {
//   const increasingNumOrder = "1234567890";

//   for (let i = 0; i < numArr.length - 1; i++) {
//     const increasingOrder =
//       increasingNumOrder.indexOf(numArr[i]) + 1 !==
//       increasingNumOrder.indexOf(numArr[i + 1]);
//     const decreasingOrder = parseInt(numArr[i]) - 1 !== parseInt(numArr[i + 1]);

//     if (order === "+" ? increasingOrder : decreasingOrder) return false;
//   }
//   return true;
// }

function isInteresting(number, awesomePhrases) {
  var tests = [
    (n) => /^\d00+$/.test(n),
    (n) => /^(\d)\1+$/.test(n),
    (n) => RegExp(n).test(1234567890),
    (n) => RegExp(n).test(9876543210),
    (n) => n.toString() == n.toString().split("").reverse().join(""),
    (n) => awesomePhrases.some((p) => p == n),
  ];

  var interesting = 0;
  tests.some((test) => {
    if (number > 99 && test(number)) return (interesting = 2);
    else if (
      (number > 98 && test(number + 1)) ||
      (number > 97 && test(number + 2))
    )
      interesting = 1;
  });
  return interesting;
}

console.log(isInteresting(3, [1337, 256])); // 0
console.log(isInteresting(1336, [1337, 256])); // 1
console.log(isInteresting(1337, [1337, 256])); // 2

console.log(isInteresting(10000, [])); // 2
console.log(isInteresting(111, [])); // 2

console.log(isInteresting(1234, [1337, 256])); // 2
console.log(isInteresting(7890, [1337, 256])); // 2
console.log(isInteresting(78901, [1337, 256])); // 0
console.log(isInteresting(4321, [1337, 256])); // 2
console.log(isInteresting(43210, [1337, 256])); // 2

console.log(isInteresting(11208, [1337, 256])); // 0
console.log(isInteresting(11209, [1337, 256])); // 1
console.log(isInteresting(11211, [1337, 256])); // 2

console.log(isInteresting(7540, [])); // 0
console.log(isInteresting(98, [])); // 1
