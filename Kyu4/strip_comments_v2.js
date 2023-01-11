function solution(input, markers) {
  return input.substring(0, input.indexOf(markers[0]));
}

console.log(solution("test!delete me", ["!"])); // test

// checkComments(
//   "apples, plums % and bananas\npears\noranges !applesauce",
//   ["%", "!"],
//   "apples, plums\npears\noranges"
// );
// checkComments("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne");

// console.log("apples, plums % and bananas\npears\noranges !applesauce");
