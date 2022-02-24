

var argumentsFake = {
    0: 'test1',
    1: 'test2',
    2: 'test3',
    3: 'test4',
    4: 'test5',
    length: 5
}

var arr1 = Array.from(argumentsFake);

console.log('arr1===', arr1);

var arr2 = Array.prototype.slice.call(argumentsFake);

console.log('arr2===', arr2);

Array.prototype.mySlice = function(start, end) {
    var arr = this;// this === argumentsFake
    var newArr = [];
    start = start || 0;
    end = end || arr.length;
    debugger
    for(var i = start; i < end; i++) {
        newArr[i] = arr[i];
    }
    return newArr;
}

var arr3 = Array.prototype.mySlice.call(argumentsFake);

console.log('arr3===', arr3);
