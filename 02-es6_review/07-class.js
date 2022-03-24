
// 一基础
function Point(x, y){
    this.x = x;
    this.y = y;
}

Point.prototype.sayHi = function() {
    return '(' + this.x + ', ' + this.y + ')';
}

var p = new Point(1, 2);

Object.keys(Point.prototype)
// ["toString"]
Object.getOwnPropertyNames(Point.prototype)
// ["constructor","toString"]


class Point1 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    sayHi() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}
var p1 = new Point1(1, 2);

Object.keys(Point1.prototype)
// [] 类的内部所有定义的方法，都是不可枚举的
Object.getOwnPropertyNames(Point1.prototype)
// ["constructor","toString"]



class Point {
}
// 等同于
class Point {
  constructor() {}
}

// 类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别


class MyClass {
    constructor() {
      // ...
    }
    get prop() {
      return 'getter';
    }
    set prop(value) {
      console.log('setter: '+value);
    }
  }
  
  let inst = new MyClass();
  
  inst.prop = 123;
  // setter: 123
  
  inst.prop
  // 'getter'



// （1）严格模式
// （2）不存在提升
// （3）name 属性
// （4）Generator 方法
class Foo {
    constructor(...args) {
      this.args = args;
    }
    * [Symbol.iterator]() {
      for (let arg of this.args) {
        yield arg;
      }
    }
  }
  
  for (let x of new Foo('hello', 'world')) {
    console.log(x);
  }
  // hello
  // world

//   （5）this 的指向
class Logger {
    printName(name = 'there') {
      this.print(`Hello ${name}`);
    }
  
    print(text) {
      console.log(text);
    }
  }
  
  const logger = new Logger();
  const { printName } = logger;
  printName(); // TypeError: Cannot read property 'print' of undefined
//   上面代码中，printName方法中的this，默认指向Logger类的实例。
//   但是，如果将这个方法提取出来单独使用，
//   this会指向该方法运行时所在的环境（由于 class 内部是严格模式，所以 this 实际指向的是undefined），从而导致找不到print方法而报错。

// 一个比较简单的解决方法是，在构造方法中绑定this，这样就不会找不到print方法了。
// 另一种解决方法是使用箭头函数。


// 静态方法

// 注意，如果静态方法包含this关键字，这个this指的是类，而不是实例。
// 父类的静态方法，可以被子类继承。
class Foo {
  static bar() {
    this.baz();
  }
  static baz() {
    console.log('hello');
  }
  baz() {
    console.log('world');
  }
}

Foo.bar() // hello


// 这种新写法的好处是，所有实例对象自身的属性都定义在类的头部，看上去比较整齐，一眼就能看出这个类有哪些实例属性。
class foo {
  bar = 'hello';
  baz = 'world';

  constructor() {
    // ...
  }
}

// 目前，只有这种写法可行，因为 ES6 明确规定，Class 内部只有静态方法，没有静态属性。
// 现在有一个提案提供了类的静态属性，写法是在实例属性的前面，加上static关键字。
class MyClass {
  static myStaticProp = 42;

  constructor() {
    console.log(MyClass.myStaticProp); // 42
  }
}


// 还有一种方法是利用Symbol值的唯一性，将私有方法的名字命名为一个Symbol值。

const bar = Symbol('bar');
const snaf = Symbol('snaf');

export default class myClass{

  // 公有方法
  foo(baz) {
    this[bar](baz);
  }

  // 私有方法
  [bar](baz) {
    return this[snaf] = baz;
  }

  // ...
};

// 目前，有一个提案，为class加了私有属性。方法是在属性名之前，使用#表示。

class IncreasingCounter {
  #count = 0;
  get value() {
    console.log('Getting the current value!');
    return this.#count;
  }
  increment() {
    this.#count++;
  }
}


class Point { /* ... */ }

class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y); // 调用父类的constructor(x, y)
    this.color = color;
  }

  toString() {
    return this.color + ' ' + super.toString(); // 调用父类的toString()
  }
}


// super这个关键字，既可以当作函数使用，也可以当作对象使用。在这两种情况下，它的用法完全不同。

// 第一种情况，super作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super函数。

class A {}

class B extends A {
  constructor() {
    super();
  }
}

// 第二种情况，super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。

class A {
  p() {
    return 2;
  }
}

class B extends A {
  constructor() {
    super();
    console.log(super.p()); // 2
  }
}

let b = new B();
