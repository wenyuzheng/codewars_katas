function orderWeight(string) {
  if (string.length <= 1) return string;
  let weights = [];
  string
    .trim()
    .split(" ")
    .forEach((e) => {
      const w = e.split("").reduce((a, b) => Number(a) + Number(b), 0);
      weights.push([e, w]);
    });

  const str = weights
    .sort((a, b) => a[1] - b[1])
    .map((e) => e[0].toString())
    .join(" ");

  return str;
}

console.log(orderWeight("") === ""); // ""
console.log(orderWeight("56 65 74 100 99 68 86 180 90")); // "100 180 90 56 65 74 68 86 99"
