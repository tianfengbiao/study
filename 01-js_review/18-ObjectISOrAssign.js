// Object.is() 方法判断两个值是否为同一个值。如果满足以下条件则两个值相等:

// 都是 undefined
// 都是 null
// 都是 true 或 false
// 都是相同长度的字符串且相同字符按相同顺序排列
// 都是相同对象（意味着每个对象有同一个引用）
// 都是数字且
// 都是 +0
// 都是 -0
// 都是 NaN
// 或都是非零而且非 NaN 且为同一个值

var a1 = undefined;
var b1 = undefined;

console.log('11====', Object.is(a1, b1))

var a2 = null;
var b2 = null;

console.log('22====', Object.is(a2, b2))

var a3 = false;
var b3 = false;

console.log('33====', Object.is(a3, b3))

var a4 = 'aasd';
var b4 = 'aasd';

console.log('44====', Object.is(a4, b4))

var a5 = {};
var b5 = a5;
debugger
console.log('55====', Object.is(a5, b5))

var a6 = NaN;
var b6 = NaN;
console.log('66====', Object.is(a6, b6))

var a7 = -0;
var b7 = +0;
console.log('77====', Object.is(a7, b7))// false

Object.is = function(x, y) {
    // SameValue algorithm
    if (x === y) { // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
};


Object.create = function (proto, propertiesObject) {

    function F() {}
    F.prototype = proto;

    return new F();
};


const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }
