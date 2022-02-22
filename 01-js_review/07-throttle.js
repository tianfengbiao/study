function throttle(fn, wait, immediate) {
    var timer = null;
    return function() {
        if(timer) {
            return;
        }

        if(immediate) {
            if(!timer) {
                fn.apply(this, arguments);
                timer = setTimeout(function(){
                    timer = null;
                }, wait);   
            }
        } else {
            timer = setTimeout(function(){
                fn.apply(this, arguments);
                timer = null;
            }, wait)
        }
    }
}
