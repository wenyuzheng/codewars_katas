export function VigenèreCipher(key, abc) {
  this.encode = function (str) {
    const chars = str.split("");
    const encodedChars = chars.map((char) => {
      if (!abc.includes(char)) return char;
    });
    return encodedChars.join("");
  };
  this.decode = function (str) {
    //...
  };
}
