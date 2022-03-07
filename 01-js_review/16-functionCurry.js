
function add() {
    var arg = Array.from(arguments);
    function fn() {
        arg = arg.concat(Array.from(arguments));
        return fn;// 这里会调用toString
    }
    fn.toString = function() {
        return arg.reduce((pre, next) => {
            return pre + next;
        })
    }
    return fn;
} 

var res1 = add(1)(2)(3)(4)//10;
var res2 = add(1)(1,2,3)(2)//9;
debugger

console.log('res1===',res1)
console.log('res2===',res2)
