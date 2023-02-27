const MORSE_CODE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

const gcd = (a, b) => {
  if (a == 0) return b;
  return gcd(b % a, a);
};

const arrayGcd = (arr) => {
  let res = arr[0];
  for (let i = 1; i < arr.length; i++) {
    res = gcd(arr[i], res);
  }
  return res;
};

var decodeBits = function (bits) {
  const cleaned = bits.replace(/^0+|0+$/g, "");
  const uniqOnesLength = [...new Set(cleaned.split("0"))].map((e) => e.length);
  const uniqZerosLength = [...new Set(cleaned.split("1"))].map((e) => e.length);

  const rate = arrayGcd([...uniqOnesLength, ...uniqZerosLength]);

  return cleaned
    .replace(new RegExp("111".repeat(rate), "g"), "-")
    .replace(new RegExp("1".repeat(rate), "g"), ".")
    .replace(new RegExp("0000000".repeat(rate), "g"), "   ")
    .replace(new RegExp("000".repeat(rate), "g"), " ")
    .replace(new RegExp("0".repeat(rate), "g"), "");
};

decodeMorse = function (morseCode) {
  return morseCode
    .trim()
    .split("   ")
    .map((word) =>
      word
        .split(" ")
        .map((char) => MORSE_CODE[char])
        .join("")
    )
    .join(" ");
};

console.log(
  decodeMorse(
    decodeBits(
      "1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011"
    )
  )
); // "HEY JUDE"

console.log(decodeMorse(decodeBits("1"))); // 'E'
console.log(decodeMorse(decodeBits("111"))); // 'E'
console.log(decodeMorse(decodeBits("1111111"))); // 'E'

console.log(decodeMorse(decodeBits("101"))); // 'I'
console.log(decodeMorse(decodeBits("10001"))); // 'EE'
console.log(decodeMorse(decodeBits("10111"))); // 'A'

// console.log(
//   decodeBits(
//     "1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011"
//   )
// );

console.log(decodeMorse(decodeBits("1110111"))); // 'M'
console.log(decodeMorse(decodeBits("11111100111111"))); // 'M'

console.log(decodeMorse(decodeBits("01110"))); // 'E'
console.log(decodeMorse(decodeBits("000000011100000"))); // 'E'
