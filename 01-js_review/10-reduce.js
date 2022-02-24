

Array.prototype.myReduce = function() {
    var arr = this;
    var cb = arguments[0];
    var initVal = arguments[1] ? arguments[1] : arr[0];
    var initInd = arguments[1] ? 0 : 1;
    // var result;
    for(var i = initInd; i < arr.length; i++) {
        initVal = cb(initVal, arr[i], i, arr);
        // initVal = result;
    }
    return result;
}

var total = [1, 2, 3].myReduce(function (sum, current) {
    return sum + current;
}, 0);
console.log(total);//6



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
