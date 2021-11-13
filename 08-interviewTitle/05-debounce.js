
function debounce(fn, time) {
    var timer = null;
    return function() {
        if(timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            return fn.apply(this, arguments)
        }, time)
    }
}

// https://www.jianshu.com/p/7f0d3785b54a
// 优化版（立即执行，停止触发 n 秒后，才可以重新触发执行。反过来）
function debounce1(fn, wait, immediate) {
    let timer;
    return function () {
        if (timer) clearTimeout(timer);
        if (immediate) {
            // 如果已经执行过，不再执行
            var callNow = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, wait)
            if (callNow) {
                fn.apply(this, arguments)
            }
        } else {
            timer = setTimeout(() => {
                fn.apply(this, arguments)
            }, wait);
        }
    }
}

// 在 vue 中使用（注意：不能使用箭头函数，否则this指向不对）
// move: debounce(function () {
//     console.log(this.title);
// }, 1000)