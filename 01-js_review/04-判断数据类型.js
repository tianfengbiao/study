
// 判断简单类型
debugger

console.log(typeof '' === 'string') // true
console.log(typeof 1 === 'number') // true
console.log(typeof false === 'boolean') // true
console.log(typeof undefined === 'undefined') // true
console.log(typeof null === 'object') // true
console.log(typeof Symbol('test') === 'symbol') // true



// 判断引用类型

console.log(Array.isArray([]) === true)// true

console.log(([] instanceof Array) === true)
console.log(([] instanceof Object) === true)
console.log('instanceofTest====',instanceofTest([], Object))

// A instanceof B，如果 A 是 B 的实例，则返回 true,否则返回 false。

// 示例来自于：https://blog.csdn.net/liwenfei123/article/details/77978027
function instanceofTest (A,B) {
    var L = A.__proto__;
    var R = B.prototype;
    while(L) {
        if(L === R) {
            //A的内部属性__proto__指向B的原型对象
            return true;
        }
        L = L.__proto__;
    }
    
    return false;
}

// 万能判断类型

console.log(Object.prototype.toString.call(''))// [object String]
console.log(Object.prototype.toString.call([]))// [object Array]
