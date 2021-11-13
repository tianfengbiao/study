

function compose() {
   var fns = [].slice.call(arguments);
   function bound(val) {
        return fns.reduceRight((res, cb) => {
            return cb(res)
        }, val)
   }
   return bound;
}

// https://juejin.cn/post/6844904061821517832
const add = x => x + 10;
const multiply = x => x * 10;
// 我们来验证下这个方法
let calculate = compose(multiply, add);
let res = calculate(10);
console.log(res);    // 结果还是200


// 我们的计算改为两个函数的嵌套计算，add函数的返回值作为multiply函数的参数
let res = multiply(add(10));
console.log(res);    // 结果还是200

