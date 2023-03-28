const { path_finder } = require("../lib/path_finder_2");

describe("path finder", () => {
  xit("3x3", () => {
    const maze = `.W.
.W.
...`;
    expect(path_finder(maze)).toEqual(4);
  });

  it("3x3 false", () => {
    const maze = `.W.
  .W.
  W..`;
    expect(path_finder(maze)).toEqual(false);
  });

  //   it("6x6", () => {
  //     const maze = `......
  // ......
  // ......
  // ......
  // ......
  // ......`;
  //     expect(path_finder(maze)).toEqual(10);
  //   });

  //   it("6x6 false", () => {
  //     const maze = `......
  // ......
  // ......
  // ......
  // .....W
  // ....W.`;
  //     expect(path_finder(maze)).toEqual(false);
  //   });
});

//   testMaze(
//     16,
//     `...W.....
// ......W.W
// ...WW.W.W
// W.W......
// ........W
// ........W
// .....WW..
// W..W.WW..
// ...W.WW..`
//   );

//   testMaze(
//     16,
//     `...W.....
// ......W.W
// ...WW.W.W
// W.W......
// ........W
// ........W`
//   );
