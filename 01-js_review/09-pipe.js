
// 简单实现
function pipe() {
    var fns = Array.prototype.slice.call(arguments);
    return function(val) {
        return fns.reduce(function(res, cb) {
            return cb(res);
        }, val)
    }
}

// loash.js实现

function pipe1() {
    var fns = Array.prototype.slice.call(arguments);
    var count = 0;
    var result;
    function fn() {
        result = fns[count].apply(this, arguments);
        if(count >= fns.length - 1) {
            count = 0;
            return result;
        } else {
            ++count;
           return fn.call(null, result)
        }
    }
    return fn;
}

// https://juejin.cn/post/6844904061821517832
const add = x => x + 10;
const multiply = x => x * 10;
// var res = multiply(add(10)) // 200

var help = pipe1(add, multiply)
var res1 = help(10)// 200
debugger;
console.log('res1====', res1);
