function zeros(n) {
  let result = 0;
  while ((n = Math.floor(n / 5))) result += n;
  return result;
}

module.exports = zeros;
