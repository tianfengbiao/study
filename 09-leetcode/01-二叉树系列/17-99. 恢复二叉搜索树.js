// 99. 恢复二叉搜索树
// 给你二叉搜索树的根节点 root ，该树中的 恰好 两个节点的值被错误地交换。请在不改变其结构的情况下，恢复这棵树 。

 

// 示例 1：


// 输入：root = [1,3,null,null,2]
// 输出：[3,1,null,null,2]
// 解释：3 不能是 1 的左孩子，因为 3 > 1 。交换 1 和 3 使二叉搜索树有效。
// 示例 2：


// 输入：root = [3,1,4,null,null,2]
// 输出：[2,1,4,null,null,3]
// 解释：2 不能在 3 的右子树中，因为 2 < 3 。交换 2 和 3 使二叉搜索树有效。
 

// 提示：

// 树上节点的数目在范围 [2, 1000] 内
// -231 <= Node.val <= 231 - 1


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
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var recoverTree = function(root) {
    let preNode = null;
    let leftNode = null;
    let rightNode = null;
    function helper(root) {
        if(root === null) {
            return;
        }
        
        helper(root.left);
        if(preNode === null) {
            preNode = root;
        } else {
            if(preNode.val > root.val) {
                if(leftNode === null) {
                    leftNode = preNode;
                }
                rightNode = root;
            }
            preNode = root;
        }

        helper(root.right);
    }
    helper(root);
    
    let temp = leftNode.val;
    leftNode.val = rightNode.val;
    rightNode.val = temp;
    return root;
};
