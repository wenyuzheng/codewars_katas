function solution(list) {
  let res = "";
  let range = [];

  for (let i = 0; i < list.length; i++) {
    if (range.length === 0) {
      range.push(list[i]);
    }

    if (range[range.length - 1] + 1 === list[i]) {
      range.push(list[i]);
    }

    // if (range[range.length - 1] + 1 !== list[i]) {
    //   if (range.length >= 3) {
    //     res += range[0] + "-" + range[range.length - 1] + ",";
    //   } else {
    //     range.forEach((e) => (res += e + ","));
    //   }
    //   range = [];
    // }
  }
  return res;
}

console.log(solution([17, 18, 19, 20])); // "17-20"

// console.log(
//   solution([
//     -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
//   ])
// ); // "-6,-3-1,3-5,7-11,14,15,17-20"
