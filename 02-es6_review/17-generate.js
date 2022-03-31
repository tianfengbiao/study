function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
  }
  
  var hw = helloWorldGenerator();

  hw.next()
// { value: 'hello', done: false }

hw.next()
// { value: 'world', done: false }

hw.next()
// { value: 'ending', done: true }

hw.next()
// { value: undefined, done: true }

// 由于 Generator 函数返回的遍历器对象，只有调用next方法才会遍历下一个内部状态，所以其实提供了一种可以暂停执行的函数。yield表达式就是暂停标志。

// 遍历器对象的next方法的运行逻辑如下。

// （1）遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。

// （2）下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。

// （3）如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。

// （4）如果该函数没有return语句，则返回的对象的value属性值为undefined。

// 需要注意的是，yield表达式后面的表达式，只有当调用next方法、内部指针指向该语句时才会执行，
// 因此等于为 JavaScript 提供了手动的“惰性求值”（Lazy Evaluation）的语法功能。



// 上一章说过，任意一个对象的Symbol.iterator方法，等于该对象的遍历器生成函数，调用该函数会返回该对象的一个遍历器对象。

// 由于 Generator 函数就是遍历器生成函数，因此可以把 Generator 赋值给对象的Symbol.iterator属性，从而使得该对象具有 Iterator 接口。

var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

[...myIterable] // [1, 2, 3]


function* foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
  }
  
  for (let v of foo()) {
    console.log(v);
  }
  // 1 2 3 4 5
//   从上面代码可见，使用for...of语句时不需要使用next方法。




function* objectEntries(obj) {
    let propKeys = Reflect.ownKeys(obj);
  
    for (let propKey of propKeys) {
      yield [propKey, obj[propKey]];
    }
  }
  
  let jane = { first: 'Jane', last: 'Doe' };
  
  for (let [key, value] of objectEntries(jane)) {
    console.log(`${key}: ${value}`);
  }
  // first: Jane
  // last: Doe



//   Generator.prototype.return()
// Generator 函数返回的遍历器对象，还有一个return()方法，可以返回给定的值，并且终结遍历 Generator 函数。

function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen();

g.next()        // { value: 1, done: false }
g.return('foo') // { value: "foo", done: true }
g.next()        // { value: undefined, done: true }
// 上面代码中，遍历器对象g调用return()方法后，返回值的value属性就是return()方法的参数foo。
// 并且，Generator 函数的遍历就终止了，返回值的done属性为true，以后再调用next()方法，done属性总是返回true。



// （1）异步操作的同步化表达
// （2）控制流管理
// （3）部署 Iterator 接口
// （4）作为数据结构
// 如果有一个多步操作非常耗时，采用回调函数，可能会写成下面这样。







// 面看看如何使用 Generator 函数，执行一个真实的异步任务。

var fetch = require('node-fetch');

function* gen(){
  var url = 'https://api.github.com/users/github';
  var result = yield fetch(url);
  console.log(result.bio);
}
