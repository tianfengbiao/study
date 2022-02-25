
// https://juejin.cn/post/6844903620190666759

var testObj = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: ['3e', '3ee']
        }
    }
}

testObj.self = testObj;//循环引用测试

testObj.common1 = {name:'ccc'};
testObj.common2 = testObj.common1;//相同引用测试


function deepCopy(obj, map = new WeakMap()) {
    if(typeof obj === 'object') {

        var newObj = Array.isArray(obj) ? [] : {}

        if(map.has(obj)) {// 循环应用
            return map.get(obj);
        }

        map.set(obj, newObj);

        for(var key in obj) {
            if(obj.hasOwnProperty(key)) {
                // newObj[key] = typeof obj[key] === 'object' ? deepCopy(obj[key], {}) : obj[key]
                newObj[key] = deepCopy(obj[key], map)
            }
        }
        return newObj;
    } else {
        return obj
    }
}

var res = deepCopy(testObj);
debugger
console.log('res==',res)
res.b.d.e[0] = '哈哈哈';
console.log('testObj==',testObj)
console.log('res==',res)
// debugger
