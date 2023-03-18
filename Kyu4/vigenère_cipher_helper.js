export function VigenèreCipher(key, abc) {
  this.encode = function (str) {
    const chars = str.split("");
    const abcLength = abc.length;

    let keyIndex = 0;

    const encodedChars = chars.map((char) => {
      const newIndex =
        (abc.indexOf(key[keyIndex]) + abc.indexOf(char)) % abcLength;
      keyIndex = keyIndex === key.length - 1 ? 0 : keyIndex + 1;

      if (!abc.includes(char)) return char;
      return abc[newIndex];
    });

    return encodedChars.join("");
  };

  this.decode = function (str) {
    const chars = str.split("");
    const abcLength = abc.length;
    let keyIndex = 0;

    const decodedChars = chars.map((char) => {
      const newIndex =
        (abc.indexOf(char) - abc.indexOf(key[keyIndex]) + abcLength) %
        abcLength;
      keyIndex = keyIndex === key.length - 1 ? 0 : keyIndex + 1;

      if (!abc.includes(char)) return char;
      return abc[newIndex];
    });

    return decodedChars.join("");
  };
}
