
let arr = [5,2,1,3,4,6]

const buble = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        let flag = true;
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                flag = false
            }
        }
        if(flag) {
            break;
        }
    }
    return arr;
}

const res = buble(arr);

console.log('res==',res);
