
Function.prototype.myCall = function(context, ...arg) {
    context = context || window;
    var fn = this;
    context.fn = fn;
    var result = context.fn(...arg);
    delete context.fn;
    return result;
}


Function.prototype.myApply = function(context, arg) {
    context = context || window;
    var fn = this;
    context.fn = fn;
    var result = context.fn(arg);
    delete context.fn;
    return result;
}

Function.prototype.myBind = function(context) {
    var outArg = Array.prototype.slice.call(arguments, 1);
    var fn = this;
    return function() {
        var inArg = Array.prototype.slice.call(arguments);
        var arg = outArg.concat(inArg);
        return fn.apply(context, arg)
    }
}
