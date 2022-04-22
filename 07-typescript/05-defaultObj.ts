// ECMAScript 标准提供的内置对象有：

// Boolean、Error、Date、RegExp 等。

// 我们可以在 TypeScript 中将变量定义为这些类型：

let b: Boolean = new Boolean(1);
let e: Error = new Error('Error occurred');
let d: Date = new Date();
let r: RegExp = /[a-z]/;



// DOM 和 BOM 的内置对象§
// DOM 和 BOM 提供的内置对象有：

// Document、HTMLElement、Event、NodeList 等。

// TypeScript 中会经常用到这些类型：

let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function(e: MouseEvent) {
  // Do something
});




type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}

handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
// handleEvent(document.getElementById('world'), 'dblclick'); // 报错，event 不能为 'dblclick'




// 类的继承§
// 使用 extends 关键字实现继承，子类中使用 super 关键字来调用父类的构造函数和方法。
// class Animal {
//   public name;
//   constructor(name) {
//       this.name = name;
//   }
//   sayHi() {
//       return `My name is ${this.name}`;
//   }
// }

// let a: Object = new Animal('Jack');
// console.log(a.sayHi()); // My name is Jack

// class Cat extends Animal {
//   constructor(name) {
//     super(name); // 调用父类的 constructor(name)
//     console.log(this.name);
//   }
//   sayHi() {
//     return 'Meow, ' + super.sayHi(); // 调用父类的 sayHi()
//   }
// }

// let c = new Cat('Tom'); // Tom
// console.log(c.sayHi()); // Meow, My name is Tom







// 类实现接口§
// 实现（implements）是面向对象中的一个重要概念。一般来讲，一个类只能继承自另一个类，
// 有时候不同类之间可以有一些共有的特性，这时候就可以把特性提取成接口（interfaces），用 implements 关键字来实现。
// 这个特性大大提高了面向对象的灵活性。

// 举例来说，门是一个类，防盗门是门的子类。如果防盗门有一个报警器的功能，我们可以简单的给防盗门添加一个报警方法。
// 这时候如果有另一个类，车，也有报警器的功能，就可以考虑把报警器提取出来，作为一个接口，防盗门和车都去实现它：

interface Alarm {
    alert(): void;
}

class Door {
}

class SecurityDoor extends Door implements Alarm {
    alert() {
        console.log('SecurityDoor alert');
    }
}

interface Light {
  lightOn(): void;
  lightOff(): void;
}


class Car implements Alarm,Light {
    alert() {
        console.log('Car alert');
    }
    lightOn() {
        console.log('Car light on');
    }
    lightOff() {
        console.log('Car light off');
    }
  
}



// 接口继承类§
// 常见的面向对象语言中，接口是不能继承类的，但是在 TypeScript 中却是可以的：

class Point {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};


