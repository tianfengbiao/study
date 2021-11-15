
let arr = [5,2,1,3,4,6]

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
    return quickSort(leftList).concat(midVal, rightList);
}
const res = quickSort(arr);

// debugger

console.log('res555==',res);