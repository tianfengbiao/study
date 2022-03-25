+0 === -0 //true
NaN === NaN // false

Object.is(+0, -0) // false
Object.is(NaN, NaN) // true




const target = { a: 1, b: 1 };

const source1 = { b: 2, c: 2 };
const source2 = { c: 3 };

Object.assign(target, source1, source2);
// target // {a:1, b:2, c:3}

const obj = {a: 1};
Object.assign(obj) === obj // true



// ES5 引入了Object.keys方法，返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名
var obj1 = { foo: 'bar', baz: 42 };
Object.keys(obj1)
// ["foo", "baz"]


// Object.values方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值。
const obj2 = { foo: 'bar', baz: 42 };
Object.values(obj2)
// ["bar", 42]


// Object.entries()方法返回一个数组，成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键值对数组。

const obj3 = { foo: 'bar', baz: 42 };
Object.entries(obj3)
// [ ["foo", "bar"], ["baz", 42] ]
