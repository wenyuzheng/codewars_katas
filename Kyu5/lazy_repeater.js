const makeLooper = (str) => {
  let pointer = -1;
  return () => {
    pointer++;
    if (pointer === str.length) pointer = 0;
    return str[pointer];
  };
};

module.exports = makeLooper;
