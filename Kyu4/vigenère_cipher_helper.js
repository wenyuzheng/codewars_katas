export function VigenèreCipher(key, abc) {
  this.encode = function (str) {
    const chars = str.split("");

    let keyIndex = 0;
    const encodedChars = chars.map((char) => {
      if (!abc.includes(char)) return char;

      const newIndex = (abc.indexOf(key[keyIndex]) + abc.indexOf(char)) % 26;
      keyIndex = keyIndex === key.length - 1 ? 0 : keyIndex + 1;
      return abc[newIndex];
    });
    return encodedChars.join("");
  };
  this.decode = function (str) {
    //...
  };
}
