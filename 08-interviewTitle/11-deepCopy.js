

// https://juejin.cn/post/6875152247714480136#heading-33
function deepClone(target, map = new WeakMap()) {
    if(typeof target === 'object') {
        // 兼容数组
        let cloneTarget = Array.isArray(target) ? [] : {}

        if(map.has(target)) {// 循环引用
            return map.get(target);
        }
        map.set(target, cloneTarget);

        for(let key in target) {
            if(target.hasOwnProperty(key)) {
                cloneTarget[key] = deepClone(target[key], map)
            }
        }
        return cloneTarget;
    } else {
        return target;
    }
}

// https://juejin.cn/post/6875152247714480136#heading-33