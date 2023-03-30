const move = (direction, x, y) => {
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

const operators = ["+", "-", "*", "/", "%", "`"];
const popOnceOps = ["!", "_", "|"];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function interpret(code) {
  const codeArr = code.split("\n").map((e) => e.split(""));

  let stack = [];
  let output = "";

  let [x, y] = [0, 0];
  let direction = "right";

  while (codeArr[x][y] !== "@") {
    const char = codeArr[x][y];

    if (parseInt(char) >= 0 && parseInt(char) <= 9) {
      stack.push(parseInt(char));
    } else if (operators.includes(char)) {
      const a = stack.pop();
      const b = stack.pop();

      switch (char) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(b - a);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(a === 0 ? 0 : Math.floor(b / a));
          break;
        case "%":
          stack.push(a === 0 ? 0 : b % a);
          break;
        case "`":
          stack.push(b > a ? 1 : 0);
          break;
      }
    } else if (popOnceOps.includes(char)) {
      const element = stack.pop();

      switch (char) {
        case "!":
          stack.push(element === 0 ? 1 : 0);
          break;
        case "_":
          direction = element === 0 ? "right" : "left";
          break;
        case "|":
          direction = element === 0 ? "down" : "up";
          break;
      }
    } else {
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
        case "?":
          const randomInt = getRandomInt(4);
          direction = ["right", "left", "up", "down"][randomInt];
          break;

        case '"':
          [x, y] = move(direction, x, y);
          while (codeArr[x][y] !== '"') {
            stack.push(codeArr[x][y].charCodeAt(0));
            [x, y] = move(direction, x, y);
          }
          break;

        case ":":
          stack.push(stack.length === 0 ? 0 : stack[stack.length - 1]);
          break;
        case "\\":
          if (stack.length === 1) {
            stack.unshift(0);
          }
          const a = stack.pop();
          const b = stack.pop();
          stack.push(a, b);
          break;

        case "$":
          stack.pop();
          break;
        case ".":
          output += stack.pop();
          break;
        case ",":
          output += String.fromCharCode(stack.pop());
          break;

        case "#":
          [x, y] = move(direction, x, y);
          break;

        case "p":
          const l = stack.pop();
          const m = stack.pop();
          const n = stack.pop();
          codeArr[l][m] = String.fromCharCode(n);
          break;

        case "g":
          const e = stack.pop();
          const f = stack.pop();
          stack.push(codeArr[e][f].charCodeAt(0));
          break;

        case " ":
          break;
      }
    }
    console.log({ char, stack, output });

    [x, y] = move(direction, x, y);
  }

  return output;
}

module.exports = { interpret };
