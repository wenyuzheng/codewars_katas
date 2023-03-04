function bowlingScore(frames) {
  const framesArr = frames.split(" ");

  let result = 0;

  for (let i = 0; i < framesArr.length; i++) {
    const frame = framesArr[i].split("");
    frame.forEach((roll) => {
      result += parseInt(roll);
    });
  }

  return result;
}

console.log(bowlingScore("11 11 11 11 11 11 11 11 11 11")); // 20
// console.log(bowlingScore("X X X X X X X X X XXX")); // 300
// console.log(bowlingScore("X X 9/ 80 X X 90 8/ 7/ 44")); // 171
