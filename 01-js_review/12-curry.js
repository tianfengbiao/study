


// 第二版


function curry1(fn, length) {
    length = length || fn.length;
    return function() {
        if(arguments.length < length) {
            var args = [fn].concat([].slice.call(arguments));

            return curry1(sub_curry.apply(this, args), length - arguments.length)
        } else {
            return fn.apply(this, arguments)
        }
    }
}

function sub_curry(fn) {
    var arg = [].slice.call(arguments, 1)
    return function() {
        var args = arg.concat([].slice.call(arguments))
        return fn.apply(this, args);
    }
}

// 第三版 易懂实现

function curry2(fn, arg) {
    var length = fn.length;
    arg = arg || []
    return function() {
        var args = [...arg, ...arguments]
        if(args.length < length) {
            return curry2.call(this, fn, args)
        } else {
            return fn.apply(this, args);
        }
    }
}

var fn0 = function(a, b, c, d) {
    return [a, b, c, d];
}

var fn1 = curry2(fn0);
debugger
var res = fn1('a', 'b')('c')('d');

console.log('res===',res);
