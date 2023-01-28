function score(dice) {
  const occurrences = dice.reduce((obj, die) => {
    obj[die] ? obj[die]++ : (obj[die] = 1);
    return obj;
  }, {});

  let sum = 0;

  Object.keys(occurrences).forEach((e) => {
    e = parseInt(e);

    if (e === 1) {
      console.log(occurrences[e]);
      if (occurrences[e] > 3) {
        sum += 1000;
        occurrences[e] -= 3;
      }
      if (occurrences[e] >= 1) {
        sum += occurrences[e] * 100;
      }
    }

    if (e === 5) {
      if (occurrences[e] > 3) {
        sum += 500;
        occurrences[e] -= 3;
      }
      if (occurrences[e] >= 1) {
        sum += occurrences[e] * 50;
      }
    }

    if (2 <= e <= 6 && occurrences[e] === 3) {
      sum += e * 100;
      occurrences[e] -= 3;
    }
  });
  return sum;
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
console.log(score([2, 3, 4, 6, 2])); // 0
console.log(score([4, 4, 4, 3, 3])); // 400
console.log(score([2, 4, 4, 5, 4])); // 450
// console.log(score([1, 1, 1, 1, 1])); // 1200
// console.log(score([5, 5, 5, 5, 5])); // 600
