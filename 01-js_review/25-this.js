// this指向函数当前调用的运行环境
// 因为内存的数据结构问题
var number = 5;
var obj = {
    number: 4,
    fn1: (function () {
        var number;
        this.number *= 2;
        number = number * 2;
        number = 3;
        return function () {
            var num = this.number;
            this.number *= 2;
            console.log(num);//fn1.call(null) => window.number = 5*2 = 10 ||  obj.fn1() => obj.number = 4
            //fn1.call(null) => window.number = 10*2 = 20
            // obj.fn1() => obj.name = 4*2 = 8
            number *= 3;
            console.log(number);//fn1.call(null) => number = 3*3 = 9  || obj.fn1() => number = 9*3=27
        }
    })()
}
var fn1 = obj.fn1;
fn1.call(null);
obj.fn1();
console.log(window.number);// fn1.call(null) => window.number = 10*2 = 20

// 1、默认绑定 fn()
// 2、隐试绑定  obj.fn()  需要注意的是：对象属性链中只有最后一层会影响到调用位置
//    因为只有最后一层会确定this指向的是什么，不管有多少层，在判断this的时候，我们只关注最后一层，即此处的friend。

// 3、显式绑定 bind call apply
// 4、new 绑定
// new绑定 > 显式绑定 > 隐式绑定 > 默认绑定
// 箭头函数this的指向指向外层代码块的this
