function bowlingScore(frames) {
  const framesArr = frames.split(" ");

  let score = 0;

  for (let i = 0; i < framesArr.length; i++) {
    // if (framesArr[i] === "X") {
    //   score += 10 + framesArr[i + 1];
    // }
    // if (framesArr[i].includes("/")) {
    //   score += 10 + parseInt(framesArr[i + 1][0]);
    // }

    score += getFrameScore(framesArr[i]);

    // const frame = framesArr[i].split("");
    // let extraScore = 0;
    // for (let j = 0; j < frame.length; j++) {
    //   let result = 0;
    //   if (frame[j] === "X") {
    //     result = 10;
    //     extraScore += 2;
    //   } else {
    //     result = parseInt(frame[j]);
    //   }
    //   if (extraScore !== 0) {
    //     result += result;
    //     extraScore--;
    //   }
    //   console.log({ i, j, extraScore, result });
    //   score += result;
    // }
  }

  return score;
}

const getFrameScore = (frame) => {
  return frame.split("").reduce((sum, roll) => (sum += parseInt(roll)), 0);
};

console.log(bowlingScore("11 11 11 11 11 11 11 11 11 11")); // 20
// console.log(bowlingScore("X X X X X X X X X XXX")); // 300
// console.log(bowlingScore("X X 9/ 80 X X 90 8/ 7/ 44")); // 171
