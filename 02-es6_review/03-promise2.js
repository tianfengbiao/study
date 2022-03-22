
// 解决难点一，异步同步问题

class MyPromise {
    constructor(fn) {
        this.state = 'pending';// 解决场景一、场景二问题
        this.val = undefined;
        this.callbacks = [];
        fn(this._resolve.bind(this));
    }
    _resolve(val) {
        this.val = val;
        this.state = 'resolved';
        this.callbacks.forEach(fn => {
            fn && fn(val);
        })
    }
    then(onFulled) {
        if(this.state === 'pending') {
            this.callbacks.push(onFulled);
        } else {
            onFulled(this.val);
        }
    }
}


// 场景一

// 1 同步问题==> 加延迟执行可以解决
let p = new MyPromise(resolve => {
    console.log('同步执行');
    resolve('同步执行');
})
.then(tip => {
    console.log('then1', tip);
})
.then(tip => {
    console.log('then2', tip);
});
// 注册多次方法，可以把这些方法push到callbacks队列里，然后按顺序执行


// 场景二
// 2 延迟机制 ==> but.这里。加延迟执行。不能解决这个问题
setTimeout(() => {
    p.then(tip => {
        console.log('then3', tip);
    })
});
