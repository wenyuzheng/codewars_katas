const baseNToBaseMConverter = (num, n, m, res = 0) => {
  if (num == 0) return res;
  let i = 0;
  while (true) {
    console.log({ i });
    console.log(m ** i);
    if (num < m ** i) {
      console.log(n ** (i - 1));
      console.log(num - m ** (i - 1) * n ** (i - 1));

      res += n ** (i - 1);
      num -= m ** (i - 1) * n ** (i - 1);
      console.log({ res });
      console.log({ num });
      return baseNToBaseMConverter(num, n, m, res);
    }
    i++;
  }
};

console.log(baseNToBaseMConverter(101, 2, 5)); // 10

// 101 5

// 101 = 100 + 1
// 100 base2 = 04 base5
// 1 base2 = 01 base5
