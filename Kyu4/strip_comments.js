function solution(input, markers) {
  let indexes = [];

  for (let i = markers.length - 1; i >= 0; i--) {
    var marker = markers[i];
    console.log({ marker });
    indexes.add(input.indexOf(marker));

    let end = input.indexOf(marker);

    for (let j = input.indexOf(marker) + 1; j < input.length; j++) {
      var c = input.charAt(j);
      if (c.toLowerCase() == c.toUpperCase() && c != " ") {
        end = j;
        break;
      }
    }

    indexes.add(end);

    var test1 = input.substring(0, input.indexOf(marker));
    var test2 = input.substring(end, input.length);

    console.log({ test1 });
    console.log({ test2 });
  }

  //     input = input.substring(0, input.indexOf(marker));
  //     console.log({input});

  //     var test = input.substring(input.indexOf(marker), end);
  //     console.log({test});

  return input.trim();
}

// checkComments(
//   "apples, plums % and bananas\npears\noranges !applesauce",
//   ["%", "!"],
//   "apples, plums\npears\noranges"
// );
// checkComments("Q @b\nu\ne -e f g", ["@", "-"], "Q\nu\ne");

console.log("apples, plums % and bananas\npears\noranges !applesauce");
