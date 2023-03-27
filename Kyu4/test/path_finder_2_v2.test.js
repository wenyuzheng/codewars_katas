import { expect } from "chai";
import { pathFinder, getGraph } from "../path_finder_2_v2.js";

// describe("get graph", () => {
//   it("eg 1", () => {
//     const maze = "...";
//     const result = getGraph(maze);
//     const expected = {
//       "0,0": { neighbours: ["0,1"] },
//       "0,1": { neighbours: ["0,0", "0,2"] },
//       "0,2": { neighbours: ["0,1"] },
//     };
//     expect(result).equal(expected);
//   });
//   it("eg 2", () => {
//     const maze = "...\n...";
//     const result = getGraph(maze);
//     const expected = {
//       "0,0": { neighbours: ["0,1", "1,0"] },
//       "0,1": { neighbours: ["0,2", "0,0", "1,1"] },
//       "0,2": { neighbours: ["0,1", "1,2"] },
//       "1,0": { neighbours: ["1,1", "0,0"] },
//       "1,1": { neighbours: ["1,2", "1,0", "0,1"] },
//       "1,2": { neighbours: ["1,1", "0,2"] },
//     };
//     expect(result).equal(expected);
//   });
// });

describe("path_finder", () => {
  it("eg 1", () => {
    const maze = "...";
    const result = pathFinder(maze);
    expect(result["0,2"].finalVal).equal(2);
    // expect(result["1,2"].finalVal).equal(3);
  });
  // it("eg 1", () => {
  //   const maze = "...\n...\n...";
  //   const result = pathFinder(maze);
  //   expect(result["2,2"].finalVal).equal(4);
  //   expect(result["1,2"].finalVal).equal(3);
  // });
  // it("eg 2", () => {
  //   const maze = "...W\n....\n...W\nW.W.";
  //   const result = pathFinder(maze);
  //   // expect(result["4,4"].finalVal).equal(8);
  //   expect(result["1,3"].finalVal).equal(4);
  // });
  //  it("eg 3", () => {
  //    const maze = "...W.\n.....\n...WW\nW.W..\n.....";
  //    const result = pathFinder(maze);
  //    expect(result["4,4"].finalVal).equal(8);
  //    expect(result["1,4"].finalVal).equal(5);
  //  });
});
