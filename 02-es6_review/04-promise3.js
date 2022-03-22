// 解决难点二。链式调用


class MyPromise {
    constructor(fn) {
        this.state = 'pending';// 解决场景一、场景二问题
        this.val = undefined;
        this.callbacks = [];
        fn.call(this, this._resolve.bind(this));
    }
    _resolve(val) {
        // 它是对 resolve 中的值作了一个特殊的判断，判断 resolve 的值是否为 Promise实例，
        // 如果是 Promise 实例，那么就把当前 Promise 实例的状态改变接口重新注册到 resolve 的值对应的 Promise 的 onFulfilled 中，
        // 也就是说当前 Promise 实例的状态要依赖 resolve 的值的 Promise 实例的状态。
        if (val && (typeof val === 'object' || typeof val === 'function')) {
            var then = val.then;
            if (typeof then === 'function') {
                then.call(val, this._resolve.bind(this));
                // 见图： Promise解说.png
                // 把Promise3的this._resolve.bind(this)这个方法，传入Promise2的目的是。
                // Promise2成功回调时，让Promise2.onFull = Promise3.resolve。即把Promise3的this._resolve.bind(this)、注册到Promise2的this.callbacks里。
                // 当Promise2的异步完成时，会调用Promise2._resolve。就是调用Promise2.onFull ，调用Promise2.onFull就是调用Promise3的this._resolve.bind(this)
                // 调用Promise3的this._resolve.bind(this)。。就又会就调用Promise2.then（function (name) {console.log('name==',name)})）

                // 反之，Promise2失败回调时，让Promise2.onReject = Promise3.reject。
                // 这样。如果val是一个 Promise时。就可以通过Promise2的 onFulfilled的状态。来决定调用成功或失败的Promise2.then或Promise2.reject。
                // 由使用 Promise 的开发者决定后续 Promise 的状态。
                
                // 总而言之。就是等到Promise2异步完成后。触发Promise2的resolve(this.value)。
                // 然后执行Promise2注册的Promise2.then（function (name) {console.log('name==',name)})）
                return;
            }
        }

        this.val = val;
        this.state = 'resolved';
        this.callbacks.forEach(obj => {
            if(this.state === 'pending') {
                this.callbacks.push(obj);
            } else {
                let ret = obj.onFulfilled(this.val);
                obj.resolve(ret);
            }
        })
    }
    then(onFulled) {
        // if(this.state === 'pending') {
        //     this.callbacks.push(onFulled);
        // } else {
        //     onFulled(this.val);
        // }
        return new MyPromise(resolve => {
            let linkObj = {
                // 把第1个promise的onFulfilled 和 第2个新创建promise的resolve衔接起来
                // then 方法传入的形参 successFn 以及创建新 Promise 实例时传入的 resolve 放在一起，被push到当前 Promise 的 callbacks 队列中
                // 这是衔接当前 Promise 和后邻 Promise 的关键所在
                onFulfilled: onFulled || null,
                resolve: resolve
            }
            if(this.state === 'pending') {
                this.callbacks.push(linkObj);
            } else {
                let ret = linkObj.onFulfilled(this.val)
                linkObj.resolve(ret)
                //当第一个 Promise 成功时，resolve 方法将其状态置为 fulfilled ，并保存 resolve 带过来的value。
                // 然后取出 callbacks 中的对象，执行当前 Promise的 onFulfilled，
                // 返回值通过调用第二个 Promise 的 resolve 方法，传递给第二个 Promise。
            }
        })
    }
}

// demo需求 
// 第一个接口url获得id。
// 第二个接口通过第一个接口的返回的id，获取name。
// 第三个接口通过第二个接口的返回的name，获取课程。

function getInfo(val) {
    return new MyPromise(function (resolve) {
        //异步请求
        setTimeout(() => {
            resolve(val)
        }, 100)
    })
}

// 场景一 返回为非promise时
getInfo('111')
.then(function (id) {
    console.log('1==',id)
    return '222';
})
.then(function (name) {
    //do something
    console.log('2==',name)

    return '333';
})
.then(function (course) {
    //do something
    console.log('3==',course)
})


debugger
// 场景二 返回为promise对象时
getInfo('111111')
.then(function (id) {
    console.log('1==',id)
    return getInfo('22222');
})
.then(function (name) {
    //do something
    console.log('2==',name)

    return getInfo('333333');
})
.then(function (course) {
    //do something
    console.log('3==',course)
})
