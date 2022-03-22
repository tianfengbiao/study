// 基础版
class MyPromise {
    constructor(fn) {
        this.callbacks = [];
        fn.call(this, this._resolve.bind(this));
    }
    _resolve(val) {
        this.callbacks.forEach(fn => {
            fn && fn(val);
        })
    }
    then(onFulled) {
        this.callbacks.push(onFulled);
    }
}




// 基本使用
let p = new MyPromise(resolve => {
    setTimeout(() => {
        debugger
        resolve('5秒');
    }, 1000);
});

p.then(tip => {
    
    console.log('then1', tip);
});
