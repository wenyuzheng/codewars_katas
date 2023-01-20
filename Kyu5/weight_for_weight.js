function orderWeight(string) {
  let weights = [];
  string
    .trim()
    .split(" ")
    .sort()
    .forEach((e) => {
      weights.push([e, e.split("").reduce((a, b) => Number(a) + Number(b), 0)]);
    });

  const str = weights
    .sort((a, b) => a[1] - b[1])
    .map((e) => e[0].toString())
    .join(" ");

  return str;
}

console.log(orderWeight("") === ""); // ""
console.log(orderWeight("56 65 74 100 99 68 86 180 90")); // "100 180 90 56 65 74 68 86 99"
console.log(orderWeight("103 123 4444 99 2000")); // "2000 103 123 4444 99"
