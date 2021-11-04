// 二叉树的层序遍历
// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

 

// 示例：
// 二叉树：[3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层序遍历结果：

// [
//   [3],
//   [9,20],
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
var levelOrder = function(root) {
    let result = []
    if(root === null) {
        return result;
    }
    let quenue = [];
    quenue.push(root)
    while(quenue.length){
        let l = quenue.length;
        result.push([]);
        for(let i = 0; i < l; i++) {
            let item = quenue.shift();
            result[result.length - 1].push(item.val)
            if(item.left) {
                quenue.push(item.left);
            }
            if(item.right) {
                quenue.push(item.right);
            }
        }        
    }
    return result;
};