

let arr1 = [3,4,6]
let arr2 = [1,2,5,7]

const mergeSort = (arr1, arr2) => {
    let ret = []
    // debugger
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
