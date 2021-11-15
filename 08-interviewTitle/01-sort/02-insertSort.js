
let arr = [5,2,1,3,4,6]

const insertSort = (arr) => {
    let ret = [arr[0]];
    for(let i = 1; i < arr.length; i++) {
        let B = arr[i];
        let j = 0;
        while(j < ret.length) {
            if(B > ret[j]) {
                j++
            } else {
                break
            }
        }
        ret.splice(j,0,B)
    }
    return ret;
}

const res = insertSort(arr);


console.log('res555==',res);