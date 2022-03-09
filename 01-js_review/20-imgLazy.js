
// 可以给img标签统一自定义属性data-src='default.png'，
// 当检测到图片出现在窗口之后再补充src属性，此时才会进行图片资源加载。

// 图片懒加载
const imgLazy = () => {
    const imgs = document.getElementsByTagName('img');
    const imgL = imgs.length;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight= document.documentElement.clientHeight;

    for(let i = 0; i < imgL; i++) {
        const imgOffsetTop = imgs[i].offsetTop;
        if(imgOffsetTop < scrollTop + clientHeight) {// 图片出现在视图窗口内
            imgs[i].src = imgs[i].dataset.src
        }
    }
}

// 可以使用节流优化一下
window.addEventListener('scroll', imgLazy);



// 滚动懒加载

const scrollLazyLoad = () => {
    window.addEventListener('scroll',() => {
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        const scrollHeight = document.documentElement.scrollHeight;

        if(scrollTop + clientHeight >= scrollHeight) {
            console.log('滚动到底部')
        } else if(scrollTop === 0) {
            console.log('滚动到顶部')
        }
    } ,false)
}



// 渲染几万条数据不卡住页面
// 渲染大数据时，合理使用createDocumentFragment和requestAnimationFrame，将操作切分为一小段一小段执行。

const mutilDataLazy = () => {
    setTimeout(() => {
        // 十万条数据
        const data = 100000;
        // 每一次插入20条
        const once = 20;
        // 至少要插入5000次数
        const count = Math.ceil(data / once);
        const countRender = 0;
        const ul = document.querySelector('ul');

        const add = () => {
            const fragment = document.createDocumentFragment();

            for(let i = 0; i < once; i++) {
                const li = document.createElement('li');
                li.innerText = Math.floor(Math.random() * data);
                fragment.appendChild(li);
            }

            ul.appendChild(fragment);
            countRender += 1;
            loop();
        }

        const loop = () => {
            if(countRender < count) {
                window.requestAnimationFrame(add);
            }
        }

        loop();
    }, 0);
}


// 打印出当前网页使用了多少种HTML元素
const fn = () => {
    return [...new Set([...document.querySelectorAll('*')].map(el => el.tagName))].length;
}
