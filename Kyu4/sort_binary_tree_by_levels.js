function treeByLevels(rootNode, res = []) {
  if (!rootNode) return [];

  res.push(rootNode.value, rootNode.left.value, rootNode.right.value);
  //   return treeByLevels()

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
