const lowercases = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function mix(s1, s2) {
  const s1Letters = countLetters(s1);
  const s2Letters = countLetters(s2);

  let str = [];
  for (let i = 0; i < lowercases.length; i++) {
    const e = lowercases[i];
    if (s1Letters[e] === s2Letters[e] && s1Letters[e] > 1) {
      str.push("=" + ":" + e.repeat(s1Letters[e]));
      continue;
    }
    const count = Math.max(
      s1Letters[e] ? s1Letters[e] : 0,
      s2Letters[e] ? s2Letters[e] : 0
    );

    const origin = count === s1Letters[e] ? "1" : "2";
    if (count > 1) str.push(origin + ":" + e.repeat(count));
  }

  //   for (let i = 0; i < lowercases.length; i++) {
  //     const e = lowercases[i];
  //     if (s1Letters[e] === s2Letters[e] && s1Letters[e] > 1) {
  //       str.push({ from: "=", string: e.repeat(s1Letters[e]) });
  //       continue;
  //     }
  //     const count = Math.max(
  //       s1Letters[e] ? s1Letters[e] : 0,
  //       s2Letters[e] ? s2Letters[e] : 0
  //     );

  //     const origin = count === s1Letters[e] ? "1" : "2";
  //     if (count > 1) str.push({ from: origin, string: e.repeat(count) });
  //   }

  str.sort((a, b) => b.slice(2).length - a.slice(2).length);

  return str.join("/");
}

const countLetters = (str) => {
  let letters = {};
  str.split("").forEach((s) => {
    if (lowercases.includes(s)) {
      letters[s] ? (letters[s] += 1) : (letters[s] = 1);
    }
  });
  return letters;
};

// console.log(countLetters("A aaaa bb c")); // 4 'a', 2 'b', 1 'c'
// console.log(countLetters("& aaa bbb c d")); // 3 'a', 3 'b', 1 'c', 1 'd'

// console.log(mix("A aaaa bb c", "& aaa bbb c d")); // "1:aaaa/2:bbb"
// console.log(mix("Are they here", "yes, they are here")); // "2:eeeee/2:yy/=:hh/=:rr"
console.log(
  mix(
    "my&friend&Paul has heavy hats! &",
    "my friend John has many many friends &"
  )
); // "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"
