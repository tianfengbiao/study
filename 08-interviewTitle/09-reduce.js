
// https://juejin.cn/post/6950650971534360590
Array.prototype.myReduce = function(fn, init) {
    var arr = this;
    var initVal = init || arr[0];
    const startIndex = init ? 0 : 1

    for(let i = startIndex; i < arr.length; i++) {
        initVal = fn(initVal, arr[i],i,arr)
    }
    return initVal;
}

var total = [1, 2, 3].myReduce(function (sum, current) {
    return sum + current;
}, 0);
console.log(total);//6
// debugger

Array.prototype.myReduceRight = function(fn, init) {
    var arr = this;
    var initVal = init || arr[arr.length-1];
    const startIndex = init ? arr.length-1 : arr.length-1-1
   
    for(let i = startIndex; i >= 0; i--) {
        initVal = fn(initVal, arr[i],i,arr)
    }
    return initVal;
}

var total1 = [1, 2, 3,4].myReduceRight(function (sum, current) {
    return sum + current;
}, 0);
console.log(total1);//6
// debugger