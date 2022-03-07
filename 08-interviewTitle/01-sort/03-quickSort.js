
let arr = [5,2,1,3,4,5,7,6]

const quickSort = (arr) => {
    if(arr.length <= 1) {
        return arr;
    }
    let leftList = [];
    let rightList = [];
    let midInd = Math.floor(arr.length/2);
    let midVal = arr.splice(midInd, 1);
    let i = 0;
    while(i < arr.length) {
        if(arr[i] < midVal) {
            leftList.push(arr[i])
        } else {
            rightList.push(arr[i]);
        }
        i++;
    }
    return quickSort(leftList).concat(midVal, quickSort(rightList));
}
const res = quickSort(arr);

// debugger

console.log('res555==',res);


var arr1 = [4,2,1,3,5,4,7,6,8];

function quickSort1(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    var l = arr.length;
    var midInd = Math.floor(l / 2);
    var midVal = arr.splice(midInd, 1);
    var leftArr = [];
    var righArr = [];
    for(var i = 0; i < arr.length; i++) {
        if(midVal >= arr[i]) {
            leftArr.push(arr[i])
        } else {
            righArr.push(arr[i])
        }
    }
    return quickSort1(leftArr).concat(midVal,quickSort1(righArr));
}
debugger

var res1 = quickSort1(arr1);


console.log('res1111==',res1);
