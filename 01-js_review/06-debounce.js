
function myDebounce (fn, time, immediate) {
    var timer = null;
    return function() {
        if(timer) {
            clearTimeout(timer)
        }
        if(immediate) {
            var callNow = !timer;
            timer = setTimeout(function() {
                timer = null;
            }, time)
            if(callNow) {
                fn.apply(this, arguments);
            }
        } else {
            timer = setTimeout(function(){
                fn.apply(this, arguments)
            }, time)
        }
        
    }
}
