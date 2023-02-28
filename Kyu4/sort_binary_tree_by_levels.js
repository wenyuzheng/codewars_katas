function treeByLevels(rootNode) {
  if (!rootNode) return [];

  let res = [rootNode.value];
  let nodes = [rootNode.left, rootNode.right];

  while (nodes.length !== 0) {
    const curr = nodes.shift();
    res.push(curr.value);
    if (curr.left) {
      nodes.push(curr.left);
    }
    if (curr.right) {
      nodes.push(curr.right);
    }
  }

  return res;
}

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

console.log(
  treeByLevels(
    new Node(
      2,
      new Node(8, new Node(1), new Node(3)),
      new Node(9, new Node(4), new Node(5))
    )
  )
); // [2,8,9,1,3,4,5]
