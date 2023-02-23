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

var decodeBits = function (bits) {
  //   const splitBit = bits.includes("0") ? "1" : "0";

  //   console.log({ splitBit });

  let longestLength = 0;

  bits
    .split("0")
    .filter((e) => e !== "")
    .forEach((e) => (longestLength = Math.max(longestLength, e.length)));

  return longestLength % 3;

  //   return bits
  //     .split("0000000".repeat(rate))
  //     .map((word) =>
  //       word
  //         .split("000".repeat(rate))
  //         .map((char) =>
  //           char
  //             .split("0".repeat(rate))
  //             .map((symbol) =>
  //               symbol
  //                 .replace("111".repeat(rate), "-")
  //                 .replace("1".repeat(rate), ".")
  //             )
  //             .join("")
  //         )
  //         .join(" ")
  //     )
  //     .join("   ");
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

// console.log(
//   decodeMorse(
//     decodeBits(
//       "1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011"
//     )
//   )
// ); // "HEY JUDE"

// console.log(decodeMorse(decodeBits("1"))); // 'E'
// console.log(decodeMorse(decodeBits("111"))); // 'E'
// console.log(decodeMorse(decodeBits("1111111"))); // 'E'

// console.log(decodeMorse(decodeBits("101"))); // 'I'
// console.log(decodeMorse(decodeBits("10001"))); // 'EE'
// console.log(decodeMorse(decodeBits("10111"))); // 'A'

console.log(decodeBits("000000011100000"));

// console.log(decodeMorse(decodeBits("1110111"))); // 'M'
// console.log(decodeMorse(decodeBits("11111100111111"))); // 'M'

// console.log(decodeMorse(decodeBits("01110"))); // 'E'
// console.log(decodeMorse(decodeBits("000000011100000"))); // 'E'
