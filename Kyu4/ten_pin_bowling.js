function bowlingScore(frames) {
  const framesArr = frames.split(" ");

  let score = 0;

  for (let i = 0; i < framesArr.length; i++) {
    if (framesArr[i] === "X") {
      score += 10 + getFrameScore(framesArr[i + 1]);
    }
    //  else if (framesArr[i].includes("/")) {}
    //   score += 10 + getFrameScore(framesArr[i + 1]);
    // }

    score += getFrameScore(framesArr[i]);

    console.log({ score });
  }

  return score;
}

const getFrameScore = (frame) => {
  if (frame === "X") return 10;
  else if (frame.includes("/")) return 10;
  else return frame.split("").reduce((sum, roll) => (sum += parseInt(roll)), 0);
};

// console.log(bowlingScore("11 11 11 11 11 11 11 11 11 11")); // 20
console.log(bowlingScore("X X X X X X X X X 11")); // 300
console.log(bowlingScore("X X 9/ 80 X X 90 8/ 7/ 44")); // 171
