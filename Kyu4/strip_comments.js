function solution(input, markers) {
  console.log;
  for (let i = markers.length - 1; i >= 0; i--) {
    console.log({ i });
    var marker = markers[i];
    console.log(marker);

    let end = input.indexOf(marker);

    for (let j = input.indexOf(marker) + 1; j < input.length; j++) {
      var c = input.charAt(j);
      if (c.toLowerCase() != c.toUpperCase() && c != " ") {
        console.log({ c });
        let end = j;
        console.log({ j });
      }
    }

    input = input.substring(0, input.indexOf(marker));
    console.log(input);
  }
  return input.trim();
}
