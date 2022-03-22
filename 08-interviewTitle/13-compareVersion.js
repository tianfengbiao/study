// 在开发过程中，我们常常需要比较两个版本号的大小，来做一些特殊处理，今天我们就来实现此功能。

// 假设版本号为非空字符串，并且只包含数字和 . 字符。
// 这种情形下比较两个版本号 
// version1 和 version2，如果 version1 > version2 返回 1，如果 version1 < version2 返回 -1， 除此之外返回 0。
// ————————————————
// 版权声明：本文为CSDN博主「wanglele16」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/wanglele16/article/details/100897030

const compareVersion = (v1, v2) => {
    let vArr1 = v1.split('.');
    let vArr2 = v2.split('.');

    let minl = Math.min(vArr1.length, vArr2.length);
    let i = 0
    for(i; i < l; i++) {
        let count1 = parseInt(vArr1[i])
        let count2 = parseInt(vArr2[i])
        if(count1 > count2) {
            return 1
        } else if(count1 < count2) {
            return -1
        }       
    }

    if(vArr1.length > vArr2.length) {
        for(let j = i; j < vArr1.length; j++) {
            if(parseInt(vArr1[j]) !== 0) {
                return 1
            }
        }
        return 0
    } else if(vArr1.length < vArr2.length) {
        for(let j = i; j < vArr2.length; j++) {
            if(parseInt(vArr2[j]) !== 0) {
                return -1
            }
        }
        return 0
    }

    return 0;
}

//版本号比较
const versionStringCompare = (preVersion='', lastVersion='') => {
    var sources = preVersion.split('.');
    var dests = lastVersion.split('.');
    // debugger
    var maxL = Math.max(sources.length, dests.length);
    var result = 0;
    for (let i = 0; i < maxL; i++) {  
        let preValue = sources.length>i ? sources[i]:0;
        let preNum = isNaN(Number(preValue)) ? preValue.charCodeAt() : Number(preValue);
        let lastValue = dests.length>i ? dests[i]:0;
        let lastNum =  isNaN(Number(lastValue)) ? lastValue.charCodeAt() : Number(lastValue);
        if (preNum < lastNum) {
            result = -1;
            break;
        } else if (preNum > lastNum) { 
            result = 1;
            break;
        }
    }
    return result;
}

//使用示例：
let result = versionStringCompare('1.0.2', '1.0');
console.log(result);    //1

// let result = versionStringCompare('1.0.0', '1.1');
// console.log(result);    //-1

// let result = versionStringCompare('11.0.2', '5.5.6');
// console.log(result);    //1

// let result = versionStringCompare('5.5.0', '5.5');
// console.log(result);    //0

// let result = versionStringCompare('1.1.a', '1.1.1');
// console.log(result);    //1
