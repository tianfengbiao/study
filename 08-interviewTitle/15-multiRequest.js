


function myFetch(url, current) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            var val = 'value' + url + current;
            if(current === 3) {
                reject('错误')
            } else {
                resolve(val)
            }
        },2000)
    })
}

multiRequest(['/test1','/test2','/test3','/test4', '/test5', '/test6', '/test7'], 5).then(resArr => {
    console.log('resArr===',resArr)
})


function multiRequest(urls, maxNum) {
       // 请求总数量
       const len = urls.length;
       // 根据请求数量创建一个数组来保存请求的结果
       const result = new Array(len).fill(false);
       // 当前完成的数量
       let count = 0;

       return new Promise((resolve, reject) => {
           // 请求maxNum个
           while (count < maxNum) {
               next();
           }

           function next() {
               let current = count++;// 先赋值，后++
               // 处理边界条件
               if (current >= len) {
                   // 请求全部完成就将promise置为成功状态, 然后将result作为promise值返回
                   !result.includes(false) && resolve(result);
                   return;
               }
               const url = urls[current];
               console.log(`开始start start start ====== ${current + 1}`, new Date().toLocaleString());
               myFetch(url, current)
                   .then((res) => {
                       // 保存请求结果
                       result[current] = res;
                       console.log(`完成了end end end ${current + 1}`, new Date().toLocaleString());
                       // 请求没有全部完成, 就递归
                       if (current < len) {
                           next();
                       }
                   })
                   .catch((err) => {
                       console.log(`结束 ${current}`, new Date().toLocaleString());
                       result[current] = err;
                       // 请求没有全部完成, 就递归
                       if (current < len) {
                           next();
                       }
                   });
           }
       });
}