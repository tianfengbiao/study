// 101. 对称二叉树
// 给你一个二叉树的根节点 root ， 检查它是否轴对称。

 

// 示例 1：


// 输入：root = [1,2,2,3,4,4,3]
// 输出：true
// 示例 2：


// 输入：root = [1,2,2,null,3,null,3]
// 输出：false

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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    function helper(root1, root2) {
        if(root1 === null && root2 === null) {
            return true;
        } else if(root1 === null || root2 === null) {
            return false;
        } else if(root1.val !== root2.val) {
            return false;
        } else {
            return helper(root1.left, root2.right) && helper(root1.right, root2.left);
        }
    }
    return helper(root, root);
};
