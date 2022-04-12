

// circle.js

// export function area(radius) {
//     return Math.PI * radius * radius;
//   }
  
//   export function circumference(radius) {
//     return 2 * Math.PI * radius;
//   }



// main.js
import * as circle from './circle';

console.log('圆面积：' + circle.area(4));
console.log('圆周长：' + circle.circumference(14));






// ES2020提案 引入import()函数，支持动态加载模块。

// import(specifier)
// 上面代码中，import函数的参数specifier，指定所要加载的模块的位置。
// import命令能够接受什么参数，import()函数就能接受什么参数，两者区别主要是后者为动态加载。

// import()返回一个 Promise 对象。下面是一个例子。

const main = document.querySelector('main');

import(`./section-modules/${someVariable}.js`)
  .then(module => {
    module.loadPageInto(main);
  })
  .catch(err => {
    main.textContent = err.message;
  });
// import()函数可以用在任何地方，不仅仅是模块，非模块的脚本也可以使用。它是运行时执行，也就是说，什么时候运行到这一句，就会加载指定的模块。
// 另外，import()函数与所加载的模块没有静态连接关系，这点也是与import语句不相同。
// import()类似于 Node 的require方法，区别主要是前者是异步加载，后者是同步加载。


/* <script src="path/to/myModule.js" defer></script>
<script src="path/to/myModule.js" async></script>
上面代码中，<script>标签打开defer或async属性，脚本就会异步加载。
渲染引擎遇到这一行命令，就会开始下载外部脚本，但不会等它下载和执行，而是直接执行后面的命令。

defer与async的区别是：defer要等到整个页面在内存中正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），才会执行；
async一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。一句话，defer是“渲染完再执行”，async是“下载完就执行”。
另外，如果有多个defer脚本，会按照它们在页面出现的顺序加载，而多个async脚本是不能保证加载顺序的。 */



// 浏览器对于带有type="module"的<script>，都是异步加载，不会造成堵塞浏览器，
// 即等到整个页面渲染完，再执行模块脚本，等同于打开了<script>标签的defer属性。

/* <script type="module" src="./foo.js"></script>
<!-- 等同于 -->
<script type="module" src="./foo.js" defer></script> */





// ES6 模块也允许内嵌在网页中，语法行为与加载外部脚本完全一致。

/* <script type="module">
  import utils from "./utils.js";

  // other code
</script> */



// ES6 模块与 CommonJS 模块的差异
// CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
// CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。
// CommonJS 模块的require()是同步加载模块，ES6 模块的import命令是异步加载，有一个独立的模块依赖的解析阶段。



// 正确
import packageMain from 'commonjs-package';

// 报错
import { method } from 'commonjs-package';
// 这是因为 ES6 模块需要支持静态代码分析，而 CommonJS 模块的输出接口是module.exports，是一个对象，无法被静态分析，所以只能整体加载。

