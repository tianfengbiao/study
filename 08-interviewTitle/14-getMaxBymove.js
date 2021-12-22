// 移动一个数使值最大

// '2736' ==> '7236'


const getMaxBymove = str => {
    let arr = str.split('');
    let maxInd = 0;
    let maxVal = arr[0]
    for(let i = 1; i < arr.length; i++) {
        if(maxVal > arr[i]) {
            continue;
        } else {
            maxVal = arr[i];
            maxInd = i;
        }
    }
    let temp = arr[0];
    arr[0] = arr[maxInd];
    arr[maxInd] = temp;
    console.log('arr==',arr)
    return arr.join('')

}

console.log('getMaxBymove(2736)==',getMaxBymove('2736'));
