class Node {
  constructor(root, children) {
    this.root = root;
    this.children = children;
  }
}

class Vertex {
  constructor(weight, node1, node2) {
    this.weight = weight;
    this.node1 = node1;
    this.node2 = node2;
  }
}
