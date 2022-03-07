
function newFn(Fn, ...arg) {
    var obj = Object.create(Fn.prototype)
    var o = Fn.apply(obj, arg)
    return typeof o === 'object' || typeof o === 'function' ? o : obj;
}
