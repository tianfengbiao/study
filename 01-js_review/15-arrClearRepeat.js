
const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}];
// new Set
const res1 = Array.from(new Set(arr));

console.log('res1==', res1)


// indexOf
const clearRepeat = arr => {
    const newArr = [];
    for(let i = 0; i < arr.length; i++) {
        if(newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
debugger
const res2 = clearRepeat(arr);
console.log('res2==', res2)



// filter
const clearRepeat1 = arr => {
    let newArr = arr.filter((item ,index) => {
        return arr.indexOf(item) === index;
    })
    return newArr;
}

const res3 = clearRepeat1(arr);
console.log('res3==', res3)


