function solution(input, markers) {
  for (var marker of markers) {
    console.log(marker);
    console.log(input.indexOf(marker));
    input.substring(input.indexOf(marker));
  }
  return input.trim();
}
