
let arr = [5,2,1,3,4,6]

const buble = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        let flag = true;
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                flag = false
            }
        }
        if(flag) {
            break;
        }
    }
    return arr;
}

const res = buble(arr);

console.log('res==',res);



var arr = [3,1,2,4,8,6,7,5]
// 第一轮 1,2,3,4,6,7,5,8  得到最大值8
// 第二轮 1,2,3,4,6,5,7,8  得到第二大值7
// 第三轮 1,2,3,4,5,6,7,8  得到第三大值6
function bubble(arr) {
    for(var i = 0; i < arr.length; i++) {
        var flag = true
        for(var j = 0; j < arr.length-1-i; j++) {// 
            if(arr[j] > arr[j+1]) {
                var temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                flag = false;
            }
        }
        if(flag) {// 减少4轮遍历
            break;
        }
    }
    return arr;
}
debugger
var result = bubble(arr);

console.log('result==',result)
