// 106. 从中序与后序遍历序列构造二叉树
// 根据一棵树的中序遍历与后序遍历构造二叉树。

// 注意:
// 你可以假设树中没有重复的元素。

// 例如，给出

// 中序遍历 inorder = [9,3,15,20,7]
// 后序遍历 postorder = [9,15,7,20,3]
// 返回如下的二叉树：

//     3
//    / \
//   9  20
//     /  \
//    15   7

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    function dfs(inorder, iStart, iEnd, postorder, pStart,pEnd){
        if(iStart > iEnd || pStart > pEnd) {
            return null;
        }
        let root = new TreeNode(postorder[pEnd]);
        let index = inorder.indexOf(root.val);

        root.left = dfs(inorder,iStart,index-1,postorder,pStart,pStart + index - iStart-1)
        root.right = dfs(inorder,index+1,iEnd,postorder,pStart+index-iStart,pEnd-1)
        return root;
    }
    return dfs(inorder,0,inorder.length-1,postorder,0,postorder.length-1)
};