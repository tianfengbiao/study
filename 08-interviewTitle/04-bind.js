
Function.prototype.myBind = function(context) {
    var outArg = Array.prototype.slice.call(this, 1);
    var fn = this;
    return function() {
        var inArg = Array.from(arguments);
        var arg = [...outArg, ...inArg];
        var result = fn.apply(context, arg);
        return result;
    }
}

Function.prototype.myBind1 = function(context) {
    var outArg = Array.prototype.slice.call(this, 1);
    var fn = this;
    function Fn() {};
    Fn.prototype = fn.prototype;
    function bound() {
        var inArg = Array.from(arguments);
        var arg = [...outArg, ...inArg];
        context = this instanceof Fn ? this : context || this;
        var result = fn.apply(context, arg);
        return result;
    }
    bound.prototype = new Fn()
    return bound;
}