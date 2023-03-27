// class Node {
//   constructor(root, edges) {
//     this.root = root;
//     this.edges = edges;
//   }
// }

// class Edge {
//   constructor(weight, node1, node2) {
//     this.weight = weight;
//     this.node1 = node1;
//     this.node2 = node2;
//   }
// }

graph = {
  a: ["b", "c"],
  b: ["a"],
  c: ["a", "d"],
  d: ["c", "e"],
  e: ["d"],
};
