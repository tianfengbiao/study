// 语法§
// 值 as 类型
// 或

// <类型>值

interface Cat {
    name: string;
    run(): void;
}
interface Fish {
    name: string;
    swim(): void;
}

function isFish(animal: Cat | Fish) {
    if (typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}





// 类型别名
// 类型别名用来给一个类型起个新名字。

// 简单的例子§
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}
// 上例中，我们使用 type 创建类型别名。

// 类型别名常用于联合类型。




// 定义一对值分别为 string 和 number 的元组：

let tom11: [string, number] = ['Tom', 25];



enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

console.log(Days["Sun"] === 0); // true
console.log(Days["Mon"] === 1); // true
console.log(Days["Tue"] === 2); // true
console.log(Days["Sat"] === 6); // true



function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']



// 静态方法§
// 使用 static 修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用：

class Animal {
  static isAnimal(a) {
    return a instanceof Animal;
  }
}

// let a1 = new Animal('Jack');
// Animal.isAnimal(a1); // true
// a1.isAnimal(a1); // TypeError: a.isAnimal is not a function




// public private 和 protected§
// TypeScript 可以使用三种访问修饰符（Access Modifiers），分别是 public、private 和 protected。

// public 修饰的属性或方法是公有的，可以在任何地方被访问到，默认所有的属性和方法都是 public 的
// private 修饰的属性或方法是私有的，不能在声明它的类的外部访问
// protected 修饰的属性或方法是受保护的，它和 private 类似，区别是它在子类中也是允许被访问的
// 下面举一些例子：

// 使用 private 修饰的属性或方法，在子类中也是不允许访问的：
class Animal2 {
  private name;
  public constructor(name) {
    this.name = name;
  }
}

class Cat2 extends Animal2 {
  constructor(name) {
    super(name);
    // console.log(this.name);
  }
}



// 而如果是用 protected 修饰，则允许在子类中访问：
class Animal3 {
  protected name;
  public constructor(name) {
    this.name = name;
  }
}

class Cat3 extends Animal3 {
  constructor(name) {
    super(name);
    console.log(this.name);
  }
}


// 当构造函数修饰为 private 时，该类不允许被继承或者实例化：
// class Animal4 {
//   public name;
//   private constructor(name) {
//     this.name = name;
//   }
// }
// class Cat4 extends Animal4 {
//   constructor(name) {
//     super(name);
//   }
// }

// let a4 = new Animal4('Jack');



// 当构造函数修饰为 protected 时，该类只允许被继承：

class Animal5 {
  public name;
  protected constructor(name) {
    this.name = name;
  }
}
class Cat5 extends Animal5 {
  constructor(name) {
    super(name);
  }
}

// let a5 = new Animal5('Jack');
                               
                               
