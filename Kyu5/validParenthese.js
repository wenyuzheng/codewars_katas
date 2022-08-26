function validParentheses(parens) {
  let num = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === "(") num++;
    else if (parens[i] === ")") num--;

    if (num < 0) return false;
  }
  return num === 0;
}
