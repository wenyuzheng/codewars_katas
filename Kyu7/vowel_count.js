// Simplier version:
function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

// Initial version:
function getCount(str) {
  const vowels = str.match(/[aeiou]/gi);
  const count = vowels === null ? 0 : vowels.length;
  return count;
}
