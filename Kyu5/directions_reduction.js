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
    if (directions[pop] === stack[0]) {
      stack.splice(0, 1);
    } else {
      stack.push(pop);
    }
  }

  return stack;
}
console.log(dirReduc(["NORTH", "SOUTH"])); // []
console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
); // ["WEST"]
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])); // []
// console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])); // ["NORTH", "WEST", "SOUTH", "EAST"]
