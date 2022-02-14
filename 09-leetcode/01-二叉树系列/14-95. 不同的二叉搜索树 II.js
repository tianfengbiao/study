
// 95. 不同的二叉搜索树 II
// 给你一个整数 n ，请你生成并返回所有由 n 个节点组成且节点值从 1 到 n 互不相同的不同 二叉搜索树 。可以按 任意顺序 返回答案。

 

// 示例 1：


// 输入：n = 3
// 输出：[[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]
// 示例 2：

// 输入：n = 1
// 输出：[[1]]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if(n <= 0) {
        return []
    }
    function helper(start, end) {
        let allTrees = [];
        if(start > end) {
            allTrees.push(null);
            return allTrees;
        }
        for(let i = start; i <= end; i++) {
            let leftTrees = helper(start, i - 1);
            let rightTrees = helper(i + 1, end);
            for(let leftKey in leftTrees) {
                for(let rightKey in rightTrees) {
                    let root = new TreeNode(i);
                    root.left = leftTrees[leftKey].val;
                    root.right = rightTrees[rightKey].val;
                    allTrees.push(root);
                }
            }
        }
        return allTrees;
    }
    return helper(1, n)
};
