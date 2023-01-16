function dirReduc(arr) {
  const directions = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    WEST: "EAST",
    EAST: "WEST",
  };

  const stack = [];
  while (arr.length !== 0) {
    const pop = arr.splice(0, 1)[0];
    console.log(directions[pop]);

    console.log(stack[0]);
    if (directions[pop] === stack[0]) {
      console.log(" match");
      stack.splice(0, 1);
    } else {
      console.log("no match");

      stack.push(pop);
    }
    console.log({ stack });
    console.log({ arr });
  }

  return stack;
}
console.log(dirReduc(["NORTH", "SOUTH"])); // []
// console.log(
//   dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
// ); // ["WEST"]
// console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])); // ["NORTH", "WEST", "SOUTH", "EAST"]
// console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])); // []
