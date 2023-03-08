function bowlingScore(frames) {
  const framesArr = frames.split(" ");

  let score = 0;

  for (let i = 0; i < framesArr.length; i++) {
    if (framesArr[i] === "X") {
      if (framesArr[i + 1].length === 1) {
        const rollsScores =
          framesArr[i + 1].length === 1
            ? getFrameScore(framesArr[i + 1]) +
              (framesArr[i + 2][0] === "X" ? 10 : parseInt(framesArr[i + 2][0]))
            : getFrameScore(framesArr[i + 1]);

        console.log({ rollsScores });
        score += 10 + rollsScores;
      }
    }
    //  else if (framesArr[i].includes("/")) {}
    //   score += 10 + getFrameScore(framesArr[i + 1]);
    // }
    else {
      score += getFrameScore(framesArr[i]);
    }

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
console.log(bowlingScore("X X X X X X X X X XXX")); // 300
// console.log(bowlingScore("X X 9/ 80 X X 90 8/ 7/ 44")); // 171
