// const makeLooper = (str) => {
//   let pointer = -1;
//   return () => {
//     pointer++;
//     if (pointer === str.length) pointer = 0;
//     return str[pointer];
//   };
// };

const makeLooper = (str) => {
  let pointer = 0;
  return () => {
    return str[pointer++ % str.length];
  };
};

module.exports = makeLooper;
