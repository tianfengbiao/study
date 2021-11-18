// 226. 翻转二叉树
// 翻转一棵二叉树。

// 示例：

// 输入：

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// 输出：

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    function _helper(root) {
        if(root === null) {
            return null;
        }
        let newRoot = new TreeNode(root.val)
        newRoot.left = _helper(root.right)
        newRoot.right = _helper(root.left)
        return newRoot
    }
    return _helper(root)
};