function bowlingScore(frames) {
  const framesArr = frames.split(" ");

  let score = 0;

  for (let i = 0; i < framesArr.length; i++) {
    if (framesArr[i] === "X" && i < 9) {
      score += 10 + getScore(framesArr, i, 2);
    } else if (framesArr[i].includes("/")) {
      score += 10 + getScore(framesArr, i, 1);
    } else if (framesArr[i].length === 3) {
      score += getThreeRollsScore(framesArr[i]);
    } else {
      score += getRollScore(framesArr[i][0]) + getRollScore(framesArr[i][1]);
    }
  }

  return score;
}

const getScore = (framesArr, index, count) => {
  const roll1 = getRollScore(framesArr[index + 1][0]);
  const roll2 = getRollScore(framesArr[index + 1][1]);

  if (framesArr[index + 1].length === 1) {
    return count === 1 ? roll1 : roll1 + getRollScore(framesArr[index + 2][0]);
  }
  return count === 1
    ? roll1
    : roll2 === 10 && roll1 !== 10
    ? roll2
    : roll2 + roll1;
};

const getRollScore = (roll) => {
  if (roll === "X" || roll === "/") return 10;
  else return parseInt(roll);
};

const getThreeRollsScore = (frame) => {
  var third = getRollScore(frame[2]);
  var second = getRollScore(frame[1]);
  var first = getRollScore(frame[0]);

  return third === 10 && second !== 10
    ? third + first
    : second === 10 && first !== 10
    ? third + second
    : first + second + third;
};

console.log(bowlingScore("11 11 11 11 11 11 11 11 11 11")); // 20
console.log(bowlingScore("X X X X X X X X X XXX")); // 300
console.log(bowlingScore("X X 9/ 80 X X 90 8/ 7/ 44")); // 171
