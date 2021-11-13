
function pipe() {
    var fns = [].slice.call(arguments);
    function bound(val) {
        return fns.reduce((res, cb) => {
            return cb(res)
        }, val)
    }
    return bound;
}


// https://juejin.cn/post/6844904061821517832
const add = x => x + 10;
const multiply = x => x * 10;
var res = multiply(add(10)) // 200

var help = pipe(add, multiply)
var res1 = help(10)// 200