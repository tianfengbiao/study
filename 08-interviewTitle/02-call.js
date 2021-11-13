
Function.prototype.myCall = function(context) {
    context.fn = this;
    var arg = [...arguments].slice(1);
    var result = context.fn(...arg)
    delete context.fn;
    return result;
}