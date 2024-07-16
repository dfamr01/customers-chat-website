class Solution {
  //Function to find the height of a binary tree.
  height(node) {
    function depthCalc(node) {
      if (!node) {
        return 0;
      }
      let depth = 0;

      const queue = [node];
      while (queue.length) {
        depth++;
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
          const qNode = queue.shift();
          if (qNode.left) {
            queue.push(qNode.left);
          }
          if (qNode.right) {
            queue.push(qNode.right);
          }
        }
      }
      return depth;
    }
    return depthCalc(node);
  }
}

function createNode(value, left = null, right = null) {
  return { value, left, right };
}

const tree = createNode(
  1,
  createNode(2, createNode(4), createNode(5)),
  createNode(3, createNode(6), createNode(7))
);

function bfs(node) {
  const result = [];
  const queue = [node];
  while (queue.length) {
    const level = queue.length;
    for (let i = 0; i < level; i++) {
      const current = queue.shift();
      result.push(current.value);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }
  return result;
}

function bfs2(node) {
  const result = [];
  const queue = [node];
  while (queue.length) {
    const current = queue.shift();
    result.push(current.value);
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return result;
}
