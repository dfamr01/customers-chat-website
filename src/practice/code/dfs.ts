function createNode(value, left = null, right = null) {
  return { value, left, right };
}

const tree = createNode(
  1,
  createNode(2, createNode(4), createNode(5)),
  createNode(3, createNode(6), createNode(7))
);

function dfs(node) {
  const stack = [node];
  const result = [];
  while (stack.length) {
    const current = stack.pop();
    result.push(current.value);
    if (current.left) {
      stack.push(current.left);
    }
    if (current.right) {
      stack.push(current.right);
    }
  }
  return result;
}
