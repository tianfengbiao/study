// 404. 左叶子之和
// 计算给定二叉树的所有左叶子之和。

// 示例：

//     3
//    / \
//   9  20
//     /  \
//    15   7

// 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    function _helper(node) {
        if(node === null) {
            return 0
        }
        let ans = 0;
        if (node.left != null) {
            ans += isLeafNode(node.left) ? node.left.val : _helper(node.left);
        }
        if (node.right != null && !isLeafNode(node.right)) {
            ans += _helper(node.right);
        }
        return ans;
    }

    function isLeafNode(node) {
        return node.left == null && node.right == null;
    }

    
    return _helper(root) || 0;
};