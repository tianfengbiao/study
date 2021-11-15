// 107. 二叉树的层序遍历 II
// 给定一个二叉树，返回其节点值自底向上的层序遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

// 例如：
// 给定二叉树 [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其自底向上的层序遍历为：

// [
//   [15,7],
//   [9,20],
//   [3]
// ]

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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(root === null) {
        return []
    }
    let q = [];
    q.push(root);
    let res = []
    while(q.length) {
        let l = q.length;
        res.unshift([])
        for(let i = 0; i < l; i++) {
            let node = q.shift();
            res[0].push(node.val)
            if(node.left) {
                q.push(node.left)
            }
            if(node.right) {
                q.push(node.right);
            }
        }
    }
    return res;
};