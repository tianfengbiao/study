
// 简单实现
function compose() {
   var fns = [].slice.call(arguments);
    return function(res) {
        return fns.reduceRight(function(pre, next) {
            return next(pre);
        }, res);
    }
}

// loash.js实现
function compose1() {
    var fns = Array.prototype.slice.call(arguments);
    var result;
    var count = fns.length - 1;
    return function fn() {
        result = fns[count].apply(this, arguments);
        if(count <= 0) {
            count = fns.length - 1;
            return result;
        } else {
            --count;
            return fn.call(null, result);
        }
    }
}

// https://juejin.cn/post/6844904061821517832
const add = x => x + 10;
const multiply = x => x * 10;
// 我们来验证下这个方法
let calculate = compose(multiply, add);
let res = calculate(10);
debugger
console.log('res222==',res);    // 结果还是200
