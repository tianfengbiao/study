// 105. 从前序与中序遍历序列构造二叉树
// 给定一棵树的前序遍历 preorder 与中序遍历  inorder。请构造二叉树并返回其根节点。

 

// 示例 1:


// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]
// 示例 2:

// Input: preorder = [-1], inorder = [-1]
// Output: [-1]


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 1,2,4,7,3,5,6,8
// 4,7,2,1,5,3,8,6

//    1
//  2  3
// 4  5  6
//  7   8
// ==>
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let root = buildTreeHelp(preorder, 0, preorder.length-1,  inorder, 0, inorder.length -1)
    function buildTreeHelp(preorder, pStart, pEnd, inorder, iStart, iEnd) {
        if(pStart > pEnd || iStart > iEnd) {
            return null;
        }
        let root = new TreeNode(preorder[pStart]);
        let index = inorder.indexOf(root.val);
        let leftLength = index - iStart;
        
        root.left = buildTreeHelp(preorder,pStart+1,pStart+leftLength,inorder,iStart,index-1)
        root.right = buildTreeHelp(preorder,pStart+leftLength+1,pEnd,inorder,index+1,iEnd)

        return root;
    }
    return root
};