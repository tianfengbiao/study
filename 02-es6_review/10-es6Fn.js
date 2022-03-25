

// rest 参数
// ES6 引入 rest 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用arguments对象了。
// rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。

function add(...values) {
  let sum = 0;

  for (var val of values) {
    sum += val;
  }

  return sum;
}

add(2, 5, 3) // 10




// 函数的name属性，返回该函数的函数名。

function foo() {}
foo.name // "foo"
var f = function () {};

// ES5
f.name // ""

// ES6
f.name // "f"



// ES6 允许使用“箭头”（=>）定义函数。

var f = v => v;

// 等同于
var f = function (v) {
  return v;
};

// （1）箭头函数没有自己的this对象（详见下文）。

// （2）不可以当作构造函数，也就是说，不可以对箭头函数使用new命令，否则会抛出一个错误。

// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。

// （4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。
