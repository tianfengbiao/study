const arr = [1, [2, [3, [4, 5]]], 6];
// => [1, 2, 3, 4, 5, 6]
// let res1 = arr.flat(Infinity);


// const res2 = JSON.stringify(arr).replace(/\[|\]/g, '').split(',');

// reduce
function flaten(arr) {
    return arr.reduce((pre, cur) => {
        let val = Array.isArray(pre) ? flaten(pre) : cur;
        return pre.concat(val);
    }, [])
}

const res5 = [];
const fn = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
        fn(arr[i]);
    } else {
        res5.push(arr[i]);
    }
  }
}
fn(arr);

// 作者：洛霞
// 链接：https://juejin.cn/post/6875152247714480136
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。