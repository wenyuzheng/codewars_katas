const getAdjacents = (digit) => {
  // ┌───┬───┬───┐
  // │ 1 │ 2 │ 3 │
  // ├───┼───┼───┤
  // │ 4 │ 5 │ 6 │
  // ├───┼───┼───┤
  // │ 7 │ 8 │ 9 │
  // └───┼───┼───┘
  //     │ 0 │
  //     └───┘

  switch (digit) {
    case "1":
      return ["1", "2", "4"];
    case "2":
      return ["1", "2", "3", "5"];
    case "3":
      return ["2", "3", "6"];
    case "4":
      return ["1", "4", "5", "7"];
    case "5":
      return ["2", "4", "5", "6", "8"];
    case "6":
      return ["3", "5", "6", "9"];
    case "7":
      return ["4", "7", "8"];
    case "8":
      return ["5", "7", "8", "9", "0"];
    case "9":
      return ["6", "8", "9"];
    case "0":
      return ["8", "0"];
  }
};

// console.log(getAdjacents("8"));

const joinElements = (array) => {
  if (array.length === 1) return array[0];

  let res = [];
  for (let j = 0; j < array.length - 1; j++) {
    const arr1 = array.shift();
    const arr2 = array.shift();
    for (let i = 0; i < arr1.length; i++) {
      arr2.forEach((e) => {
        res.push(arr1[i] + e);
      });
    }
  }

  return joinElements([res, ...array]);
};

// console.log(
//   joinElements([
//     ["2", "3", "6"],
//     ["3", "5", "6", "9"],
//     ["6", "8", "9"],
//   ])
// );

function getPINs(observed) {
  const digits = observed.split("");

  const adjacents = [];
  digits.forEach((digit) => {
    adjacents.push(getAdjacents(digit));
  });
  return joinElements(adjacents);
}

console.log(getPINs("8")); // ["5", "7", "8", "9", "0"]
console.log(getPINs("11")); // ["11", "22", "44", "12", "21", "14", "41", "24", "42"]
console.log(getPINs("369")); //  ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"]
