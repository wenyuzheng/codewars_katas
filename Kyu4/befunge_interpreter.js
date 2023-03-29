const interpretChar = (stack, output, codeArr, x, y) => {
  char = codeArr[x][y];

  console.log({ x, y, char });

  switch (char) {
    case /[^0-9]/:
      stack.push(parseInt(char));
      break;
    case ">":
      x = x + 1;
      break;
    case "<":
      x--;
      break;
    case "^":
      y--;
      break;
    case "v":
      y++;
      break;

    case "_":
      const element = stack.pop();
      element === 0 ? x++ : x--;
      break;

    case ".":
      output += stack.pop();
      break;
    case ":":
      stack.push(stack.length === 0 ? 0 : stack[stack.length - 1]);
      break;

    case " ":
      break;
  }
};

const move = (direction, x, y) => {
  //   console.log({ direction, x, y });
  switch (direction) {
    case "right":
      y++;
      break;

    case "left":
      y--;
      break;

    case "up":
      x--;
      break;

    case "down":
      x++;
      break;
  }
  return [x, y];
};

function interpret(code) {
  const codeArr = code.split("\n").map((e) => e.split(""));

  let stack = [];
  let output = "";

  let [x, y] = [0, 0];
  let direction = "right";

  while (codeArr[x][y] !== "@") {
    const char = codeArr[x][y];

    console.log({ x, y, char });

    if (parseInt(char) >= 0 && parseInt(char) <= 9) {
      stack.push(parseInt(char));
      [x, y] = move(direction, x, y);
      continue;
    }

    switch (char) {
      case ">":
        direction = "right";
        break;
      case "<":
        direction = "left";
        break;
      case "^":
        direction = "up";
        break;
      case "v":
        direction = "down";
        break;

      case "_":
        const element = stack.pop();
        direction = element === 0 ? "right" : "left";
        break;

      case ".":
        output += stack.pop();
        break;
      case ":":
        stack.push(stack.length === 0 ? 0 : stack[stack.length - 1]);
        break;

      case " ":
        break;
    }

    [x, y] = move(direction, x, y);

    console.log({ stack });
  }

  //   console.log({ x, y, char });

  return output;
}

module.exports = { interpret };
