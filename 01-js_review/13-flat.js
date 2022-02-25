
var arr = [
    1,
    [2, 3],
    [4, 5, 
        [6, 7, 
            [8, 9]
        ]
    ]
]


// var res1 = arr.flat(6);// node环境不支持
// console.log('res1===',res1)


function myFlat(arr) {
    return arr.reduce((pre, next) => {
        return pre.concat(Array.isArray(next) ? myFlat(next): next);
    }, [])
}

var res2 = myFlat(arr);
console.log('res2===',res2)


debugger

function myFlat1(arr, res) {
    res = res || [];
    for(var i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            res.concat(myFlat1(arr[i], res))
        } else {
            res.push(arr[i])
        }
    }
    return res;
}

var res3 = myFlat1(arr);
console.log('res3===',res3)
