

let arr1 = [3,4,6]
let arr2 = [1,2,5,7]

const mergeSort = (arr1, arr2) => {
    let ret = []
    // 
    while(arr1.length && arr2.length) {
        if(arr1[0] < arr2[0]) {
            ret.push(arr1[0]);
            arr1.shift()
        } else {
            ret.push(arr2[0]);
            arr2.shift()
        }
    }
    if(arr1.length) {
        ret = ret.concat(arr1)
    }
    if(arr2.length) {
        ret = ret.concat(arr2)
    }
    return ret
}
const res = mergeSort(arr1,arr2);
// debugger



console.log('res555==',res);



var arr3 = [1,2,7,9]// 有序数组
var arr4 = [3,4,5,6,8]// 有序数组

function mergeSort1(arr1, arr2) {
    var newArr = [];
    while(arr1.length && arr2.length) {
        if(arr1[0] < arr2[0]) {
            newArr.push(arr1.shift())
        } else {
            newArr.push(arr2.shift())
        }
    }

    if(arr1.length) {
        newArr.concat(arr1)
    }
    if(arr2.length) {
        newArr.concat(arr2)
    }

    return newArr;
}

var res3 = mergeSort1(arr3, arr4);
debugger
console.log('res33333===',res3)
