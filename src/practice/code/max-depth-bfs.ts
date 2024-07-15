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
export async function main() {}
