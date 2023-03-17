function bowlingScore(frames) {
  const framesArr = frames.split(" ");

  let score = 0;

  for (let i = 0; i < framesArr.length; i++) {
    if (framesArr[i] === "X" && i < 9) {
      score += 10 + getScore(framesArr, i, 2);
    } else if (framesArr[i].includes("/")) {
      score += 10 + getScore(framesArr, i, 1 && i < 9);
    } else if (framesArr[i].length === 3) {
      score += getThreeRollsScore(framesArr[i]);
    } else {
      score += getFrameScore(framesArr[i]);
    }
  }

  return score;
}

const getScore = (framesArr, index, count) => {};

const getFrameScore = (frame) => {
  if (frame === "X") return 10;
  else if (frame.includes("/")) return 10;
  else return frame.split("").reduce((sum, roll) => (sum += parseInt(roll)), 0);
};

// const getNextFrameScore = (frame, count) => {
//   if (frame === "X") return 10;
//   else if (frame.includes("/")) return 10;
//   else return frame.split("").reduce((sum, roll) => (sum += parseInt(roll)), 0);
// };

console.log(bowlingScore("11 11 11 11 11 11 11 11 11 11")); // 20
console.log(bowlingScore("X X X X X X X X X XXX")); // 300
// console.log(bowlingScore("X X 9/ 80 X X 90 8/ 7/ 44")); // 171
