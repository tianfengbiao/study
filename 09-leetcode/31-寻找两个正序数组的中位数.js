// 4. 寻找两个正序数组的中位数
// 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

// 算法的时间复杂度应该为 O(log (m+n)) 。
// 示例 1：

// 输入：nums1 = [1,3], nums2 = [2]
// 输出：2.00000
// 解释：合并数组 = [1,2,3] ，中位数 2
// 示例 2：

// 输入：nums1 = [1,2], nums2 = [3,4]
// 输出：2.50000
// 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
// 示例 3：

// 输入：nums1 = [0,0], nums2 = [0,0]
// 输出：0.00000
// 示例 4：

// 输入：nums1 = [], nums2 = [1]
// 输出：1.00000
// 示例 5：

// 输入：nums1 = [2], nums2 = []
// 输出：2.00000

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/median-of-two-sorted-arrays
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let res = [];
    while(nums1.length && nums2.length) {
        if(nums1[0] < nums2[0]) {
            res.push(nums1[0]);
            nums1.shift();
        } else {
            res.push(nums2[0]);
            nums2.shift();
        }
    }

    if(nums1.length) {
        res = res.concat(nums1)
    }
    if(nums2.length) {
        res = res.concat(nums2)
    }
    // console.log('res==',res)
    let mindVal;
    if(res.length % 2 === 0) {
        mindVal = (res[Math.floor(res.length / 2)] + res[Math.floor(res.length / 2) - 1]) / 2
    } else {
        mindVal = res[Math.floor(res.length / 2)]
    }

    return mindVal
};