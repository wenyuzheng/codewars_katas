const base10ToBase2Converter = (num) => {
  let i = 0;
  while (true) {
    if (num < 2 ** i) {
      return 2 ** (i - 1);
    }
    i++;
  }
};

console.log(base10ToBase2Converter(32));

// 110101 = 1+ 4+16+32
// 100000 = 32
// 16 10000 25 - 16 = 9
// 8 1000 9 -8 =1
// 1 1 1-1 =0
// 11001 = 10000+1000+1
