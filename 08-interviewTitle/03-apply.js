
Function.prototype.myApply = function(context, arg) {
    context.fn = this;
    let result;
    if(typeof arg === null || typeof art === undefined) {
        //undefined 或者 是 null 不是 Iterator 对象，不能被 ...
        result = context.fn(arg)
    } else if(typeof arg === 'object') {
        result = context.fn(...arg)
    }
    delete context.fn;
    return result;
}