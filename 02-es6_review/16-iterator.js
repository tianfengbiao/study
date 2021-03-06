// Iterator 的作用有三个：
// 一是为各种数据结构，提供一个统一的、简便的访问接口；
// 二是使得数据结构的成员能够按某种次序排列；
// 三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费。

// Iterator 的遍历过程是这样的。

// （1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。

// （2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。

// （3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。

// （4）不断调用指针对象的next方法，直到它指向数据结构的结束位置。

var it = makeIterator(['a', 'b']);

it.next() // { value: "a", done: false }
it.next() // { value: "b", done: false }
it.next() // { value: undefined, done: true }

function makeIterator(array) {
  var nextIndex = 0;
  return {
    next: function() {
      return nextIndex < array.length ?
        {value: array[nextIndex++], done: false} :
        {value: undefined, done: true};
    }
  };
}


// 一种数据结构只要部署了 Iterator 接口，我们就称这种数据结构是“可遍历的”（iterable）。



// 原生具备 Iterator 接口的数据结构如下。
// Array
// Map
// Set
// String
// TypedArray
// 函数的 arguments 对象
// NodeList 对象
// 下面的例子是数组的Symbol.iterator属性。

let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

iter.next() // { value: 'a', done: false }
iter.next() // { value: 'b', done: false }
iter.next() // { value: 'c', done: false }
iter.next() // { value: undefined, done: true }




const obj = { a: 1, b: 2, c: 3 }

function* entries(obj) {
  for (let key of Object.keys(obj)) {
    yield [key, obj[key]];
  }
}

for (let [key, value] of entries(obj)) {
  console.log(key, '->', value);
}
// a -> 1
// b -> 2
// c -> 3



// for...in循环可以遍历数组的键名。

for (var index in myArray) {
  console.log(myArray[index]);
}
// for...in循环有几个缺点。

// 数组的键名是数字，但是for...in循环是以字符串作为键名“0”、“1”、“2”等等。
// for...in循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。
// 某些情况下，for...in循环会以任意顺序遍历键名。
// 总之，for...in循环主要是为遍历对象而设计的，不适用于遍历数组。

// for...of循环相比上面几种做法，有一些显著的优点。

for (let value of myArray) {
  console.log(value);
}
// 有着同for...in一样的简洁语法，但是没有for...in那些缺点。
// 不同于forEach方法，它可以与break、continue和return配合使用。
// 提供了遍历所有数据结构的统一操作接口。
// 下面是一个使用 break 语句，跳出for...of循环的例子。

for (var n of fibonacci) {
  if (n > 1000)
    break;
  console.log(n);
}
