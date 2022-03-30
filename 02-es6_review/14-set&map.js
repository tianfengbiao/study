
// ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。

// Set本身是一个构造函数，用来生成 Set 数据结构。

// 例一
const set = new Set([1, 2, 3, 4, 4]);
[...set]
// [1, 2, 3, 4]

// 例二
const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
items.size // 5


// Set.prototype.constructor：构造函数，默认就是Set函数。
// Set.prototype.size：返回Set实例的成员总数。
// Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。

// Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
// Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
// Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。
// Set.prototype.clear()：清除所有成员，没有返回值。

const s = new Set();
s.add(1).add(2).add(2);
// 注意2被加入了两次

s.size // 2

s.has(1) // true
s.has(2) // true
s.has(3) // false

s.delete(2);
s.has(2) // false


// WeakSet 
// 首先，WeakSet 的成员只能是对象，而不能是其他类型的值。
// 其次，WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，
// 那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。



// avaScript 的对象（Object），本质上是键值对的集合（Hash 结构），
// 但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。

const data = {};
const element = document.getElementById('myDiv');

data[element] = 'metadata';
data['[object HTMLDivElement]'] // "metadata"




const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false





// 注意，只有对同一个对象的引用，Map 结构才将其视为同一个键。这一点要非常小心。

const map1 = new Map();

map1.set(['a'], 555);
map1.get(['a']) // undefined






// 同理，同样的值的两个实例，在 Map 结构中被视为两个键。

const map = new Map();

const k1 = ['a'];
const k2 = ['a'];

map
.set(k1, 111)
.set(k2, 222);

map.get(k1) // 111
map.get(k2) // 222

// Map.prototype.keys()：返回键名的遍历器。
// Map.prototype.values()：返回键值的遍历器。
// Map.prototype.entries()：返回所有成员的遍历器。
// Map.prototype.forEach()：遍历 Map 的所有成员。




// WeakMap与Map的区别有两点。

// 首先，WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。

const map2 = new WeakMap();
map2.set(1, 2)
// TypeError: 1 is not an object!
map2.set(Symbol(), 2)
// TypeError: Invalid value used as weak map key
map2.set(null, 2)
// TypeError: Invalid value used as weak map key
// 上面代码中，如果将数值1和Symbol值作为 WeakMap 的键名，都会报错。

// 其次，WeakMap的键名所指向的对象，不计入垃圾回收机制。
// WeakMap的设计目的在于，有时我们想在某个对象上面存放一些数据，但是这会形成对于这个对象的引用。请看下面的例子。

const e1 = document.getElementById('foo');
const e2 = document.getElementById('bar');
const arr = [
  [e1, 'foo 元素'],
  [e2, 'bar 元素'],
];
// 上面代码中，e1和e2是两个对象，我们通过arr数组对这两个对象添加一些文字说明。这就形成了arr对e1和e2的引用。

// 一旦不再需要这两个对象，我们就必须手动删除这个引用，否则垃圾回收机制就不会释放e1和e2占用的内存。

// 不需要 e1 和 e2 的时候
// 必须手动删除引用
arr [0] = null;
arr [1] = null;
// 上面这样的写法显然很不方便。一旦忘了写，就会造成内存泄露。


const wm = new WeakMap();

const element1 = document.getElementById('example');

wm.set(element1, 'some information');
wm.get(element1) // "some information"





// 总之，WeakMap的专用场合就是，它的键所对应的对象，可能会在将来消失。WeakMap结构有助于防止内存泄漏。

// 注意，WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。

