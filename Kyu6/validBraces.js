function validBraces(braces) {
  const matchingBraces = { "(": ")", "{": "}", "[": "]" };
  let stack = [];

  for (let i = 0; i < braces.length; i++) {
    const brace = braces[i];

    if (matchingBraces[brace]) stack.push(brace);
    else if (brace !== matchingBraces[stack.pop()]) {
      return false;
    }
  }
  return stack.length === 0;
}
