
// TypeScript的核心原则之一是对值所具有的结构进行类型检查。 它有时被称做“鸭式辨型法”或“结构性子类型化”。
// 在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

// 定义对象
interface SquareConfig {

    label: string;

    color?: string;// 可选属性
    width?: number;

    readonly x: number;// 只读属性


    [index: number]: string;// 可以索引类型
  }


// 定义函数
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
}


// 类类型
interface ClockInterface1 {
    currentTime: Date;
    setTime(d: Date);
}

class Clock implements ClockInterface1 {
    currentTime: Date;
    setTime(d: Date) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) { }
}

// 接口描述了类的公共部分，而不是公共和私有两部分。 它不会帮你检查类是否具有某些私有成员。
// 这里因为当一个类实现了一个接口时，只对其实例部分进行类型检查。 constructor存在于类的静态部分，所以不在检查的范围内。

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick();
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
// 因为createClock的第一个参数是ClockConstructor类型，在createClock(AnalogClock, 7, 32)里，会检查AnalogClock是否符合构造函数签名。



// 继承接口
// 和类一样，接口也可以相互继承。 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。

interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}


// 接口继承类
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}


// 联合类型使用 | 分隔每个类型。



// 「类型 + 方括号」表示法§
// 最简单的方法是使用「类型 + 方括号」来表示数组：

let fibonacci: number[] = [1, 1, 2, 3, 5];

// 数组泛型§
// 我们也可以使用数组泛型（Array Generic） Array<elemType> 来表示数组：

let fibonacci1: Array<number> = [1, 1, 2, 3, 5];

// 接口也可以用来描述数组
interface NumberArray {
    [index: number]: number;
}
let fibonacci2: NumberArray = [1, 1, 2, 3, 5];



// 上例中，arguments 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口：
function sum() {
    let args: {
        [index: number]: number;
        length: number;
        callee: Function;
    } = arguments;
}


//函数类型
function sum4(x: number, y: number): number {
    return x + y;
}
sum4(1,6);



let mySum = function (x: number, y: number): number {
    return x + y;
};

// let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
//     return x + y;
// };


interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch1: SearchFunc;
mySearch1 = function(source: string, subString: string) {
    return source.search(subString) !== -1;
}




// 可选参数§
// 前面提到，输入多余的（或者少于要求的）参数，是不允许的。那么如何定义可选的参数呢？

// 与接口中的可选属性类似，我们用 ? 表示可选的参数：

function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');





// 参数默认值§
// 在 ES6 中，我们允许给函数的参数添加默认值，TypeScript 会将添加了默认值的参数识别为可选参数：

function buildName1(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomcat1 = buildName('Tom', 'Cat');
let tom1 = buildName('Tom');





// ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数）：

function push(array, ...items) {
    items.forEach(function(item) {
        array.push(item);
    });
}

let a: any[] = [];
push(a, 1, 2, 3);




// 然而这样有一个缺点，就是不能够精确的表达，输入为数字的时候，输出也应该为数字，输入为字符串的时候，输出也应该为字符串。
// 这时，我们可以使用重载定义多个 reverse 的函数类型：

function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

