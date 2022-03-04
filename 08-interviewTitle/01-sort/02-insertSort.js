
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



var arr1 = [3,1,2,4,8,6,7,5];

function insertSortTest(oldArr) {
    var newArr = [oldArr[0]];// 默认在老牌里取第一个放到新牌里
    for(var i = 1; i < oldArr.length; i++) {
        var oldB = oldArr[i];// 旧牌里的一张牌与新牌一一对比大小
        var j = 0;
        while(j < newArr.length) {
            if(oldB < newArr[j]) {// newArr=[1,2,3]是一个有序数组；
                break;
            }
            j++;// 找到插入位置
        }
        newArr.splice(j, 0, oldB);
    }

    return newArr;
}
debugger
var result = insertSortTest(arr1);

console.log('result===', result);
