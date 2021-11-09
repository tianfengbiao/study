// 103. 二叉树的锯齿形层序遍历
// 给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。

// 例如：
// 给定二叉树 [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回锯齿形层序遍历如下：

// [
//   [3],
//   [20,9],
//   [15,7]
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
var zigzagLevelOrder = function(root) {
    let result  = [];
    if(root === null) {
        return result;
    }
    let quenue = [];
    quenue.push(root)
    while(quenue.length) {
        let l = quenue.length;
        result.push([]);
        for(let i = 0; i < l; i++) {
            let item = quenue.shift();
            if(result.length % 2 === 0) {
                result[result.length - 1].unshift(item.val);
            } else {
                result[result.length - 1].push(item.val);  
            }
            if(item.left) {
                quenue.push(item.left)
            }
            if(item.right) {
                quenue.push(item.right)
            }
        }
    }
    return result;
};