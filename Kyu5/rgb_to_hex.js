function rgb(r, g, b) {
  return convertToHex(r) + convertToHex(g) + convertToHex(b);
}

function convertToHex(val) {
  if (val < 0) val = 0;
  if (val > 255) val = 255;
  const hex = val.toString(16).toUpperCase();
  return hex.length === 1 ? "0" + hex : hex;
}

console.log(rgb(0, 0, 0)); // returns 000000
console.log(rgb(255, 255, 255)); // returns FFFFFF
console.log(rgb(148, 0, 211)); // returns 9400D3
console.log(rgb(255, 255, 300)); // returns FFFFFF
