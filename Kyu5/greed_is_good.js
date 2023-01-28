function score(dice) {
  //   const rules = {
  //     "1,1,1": 1000,
  //     "6,6,6": 600,
  //     "5,5,5": 500,
  //     "4,4,4": 400,
  //     "3,3,3": 300,
  //     "2,2,2": 200,
  //     1: 100,
  //     5: 50,
  //   };

  const rules = {
    1: { 1: 100, 3: 1000 },
    2: { 3: 200 },
    3: { 3: 300 },
    4: { 3: 400 },
    5: { 1: 50, 3: 500 },
    6: { 3: 600 },
  };

  const occurrences = dice.reduce((obj, die) => {
    obj[die] ? obj[die]++ : (obj[die] = 1);
    return obj;
  }, {});

  Object.keys(occurrences).forEach((e) => {
    console.log(Object.keys(rules[e]).includes(occurrences[e]));
  });
}

// Three 1's => 1000 points
// Three 6's =>  600 points
// Three 5's =>  500 points
// Three 4's =>  400 points
// Three 3's =>  300 points
// Three 2's =>  200 points
// One   1   =>  100 points
// One   5   =>   50 point

console.log(score([5, 1, 3, 4, 1])); // 250
// console.log(score([2, 3, 4, 6, 2])); // 0
// console.log(score([4, 4, 4, 3, 3])); // 400
// console.log(score([2, 4, 4, 5, 4])); // 450
