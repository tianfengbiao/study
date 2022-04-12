

async function asyncTest() {
    const res1 = await 1;
    console.log('res1==', res1);//1
    const res2 = await 2 + res1;
    console.log('res2==', res2);
    const res = res2 + 3;//3
    console.log('res==', res);//6
    return res;
}
debugger
const p = asyncTest().then(data => {
    console.log('data==', data);//6
});

console.log('p===', p);// Promise {<pending>}


// async函数返回一个 Promise 对象。
// async函数内部return语句返回的值，会成为then方法回调函数的参数。


function sleep(interval) {
    return new Promise(resolve => {
      setTimeout(resolve, interval);
    })
  }
  
  // 用法
  async function one2FiveInAsync() {
    for(let i = 1; i <= 5; i++) {
      console.log(i);
      await sleep(1000);
    }
  }
  
one2FiveInAsync();



async function f() {
    try {
        await Promise.reject('出错了');
        await Promise.resolve('hello world!');// 不执行
    } catch(error) {
        console.log('error==', error);// 这里catch执行了。。下面就不catch执行了
    }
}

f().then(res => {
    console.log('res==', res);
}).catch(err => {
    console.log('err==', err);
});




async function f1() {
    await Promise.reject('出错了')
      .catch(e => console.log(e));
    return await Promise.resolve('hello world');
  }
  
  f1()
  .then(v => console.log(v))
  // 出错了
  // hello world




  async function fn(args) {
    // ...
  }
  
  // 等同于
  
  function fn(args) {
    return spawn(function* () {
      // ...
    });
  }


// 所有的async函数都可以写成上面的第二种形式，其中的spawn函数就是自动执行器。
// 下面给出spawn函数的实现，基本就是前文自动执行器的翻版。

function spawn(genF) {
  return new Promise(function(resolve, reject) {
    const gen = genF();
    function step(nextF) {
      let next;
      try {
        next = nextF();
      } catch(e) {
        return reject(e);
      }
      if(next.done) {
        return resolve(next.value);
      }
      Promise.resolve(next.value).then(function(v) {
        step(function() { return gen.next(v); });
      }, function(e) {
        step(function() { return gen.throw(e); });
      });
    }
    step(function() { return gen.next(undefined); });
  });
}

