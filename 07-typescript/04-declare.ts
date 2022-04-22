// 声明文件
// 当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。

// 新语法索引§
// 由于本章涉及大量新语法，故在本章开头列出新语法的索引，方便大家在使用这些新语法时能快速查找到对应的讲解：

// declare var 声明全局变量
// declare function 声明全局方法
// declare class 声明全局类
// declare enum 声明全局枚举类型
// declare namespace 声明（含有子属性的）全局对象
// interface 和 type 声明全局类型
// export 导出变量
// export namespace 导出（含有子属性的）对象
// export default ES6 默认导出
// export = commonjs 导出模块
// export as namespace UMD 库声明全局变量
// declare global 扩展全局变量
// declare module 扩展模块
// /// <reference /> 三斜线指令


// 什么是声明文件§
// 通常我们会把声明语句放到一个单独的文件（jQuery.d.ts）中，这就是声明文件3：
// 声明文件必需以 .d.ts 为后缀。
// 一般来说，ts 会解析项目中所有的 *.ts 文件，当然也包含以 .d.ts 结尾的文件。
// 所以当我们将 jQuery.d.ts 放到项目中时，其他所有 *.ts 文件就都可以获得 jQuery 的类型定义了。

// /path/to/project
// ├── src
// |  ├── index.ts
// |  └── jQuery.d.ts
// └── tsconfig.json

// 假如仍然无法解析，那么可以检查下 tsconfig.json 中的 files、include 和 exclude 配置，确保其包含了 jQuery.d.ts 文件。


// 第三方声明文件§
// 当然，jQuery 的声明文件不需要我们定义了，社区已经帮我们定义好了：jQuery in DefinitelyTyped。

// 我们可以直接下载下来使用，但是更推荐的是使用 @types 统一管理第三方库的声明文件。

// @types 的使用方式很简单，直接用 npm 安装对应的声明模块即可，以 jQuery 举例：

// npm install @types/jquery --save-dev
// 可以在这个页面搜索你需要的声明文件。



// 书写声明文件§
// 当一个第三方库没有提供声明文件时，我们就需要自己书写声明文件了。前面只介绍了最简单的声明文件内容，
// 而真正书写一个声明文件并不是一件简单的事，以下会详细介绍如何书写声明文件。

// 在不同的场景下，声明文件的内容和使用方式会有所区别。

// 库的使用场景主要有以下几种：

// 全局变量：通过 <script> 标签引入第三方库，注入全局变量
// npm 包：通过 import foo from 'foo' 导入，符合 ES6 模块规范
// UMD 库：既可以通过 <script> 标签引入，又可以通过 import 导入
// 直接扩展全局变量：通过 <script> 标签引入后，改变一个全局变量的结构
// 在 npm 包或 UMD 库中扩展全局变量：引用 npm 包或 UMD 库后，改变一个全局变量的结构
// 模块插件：通过 <script> 或 import 导入后，改变另一个模块的结构



// declare namespace§
// namespace 是 ts 早期时为了解决模块化而创造的关键字，中文称为命名空间。

// 由于历史遗留原因，在早期还没有 ES6 的时候，ts 提供了一种模块化方案，使用 module 关键字表示内部模块。
// 但由于后来 ES6 也使用了 module 关键字，ts 为了兼容 ES6，使用 namespace 替代了自己的 module，更名为命名空间。

// 随着 ES6 的广泛应用，现在已经不建议再使用 ts 中的 namespace，而推荐使用 ES6 的模块化方案了，故我们不再需要学习 namespace 的使用了。

// namespace 被淘汰了，但是在声明文件中，declare namespace 还是比较常用的，它用来表示全局变量是一个对象，包含很多子属性。

// 比如 jQuery 是一个全局变量，它是一个对象，提供了一个 jQuery.ajax 方法可以调用，
// 那么我们就应该使用 declare namespace jQuery 来声明这个拥有多个子属性的全局变量。

// src/jQuery.d.ts

declare namespace jQuery {
    function ajax(url: string, settings?: any): void;
}

// 注意，在 declare namespace 内部，我们直接使用 function ajax 来声明函数，
// 而不是使用 declare function ajax。类似的，也可以使用 const, class, enum 等语句9：

// src/jQuery.d.ts

declare namespace jQuery {
    function ajax(url: string, settings?: any): void;
    const version: number;
    class Event {
        blur(eventType: EventType): void
    }
    enum EventType {
        CustomClick
    }
}


// 命名空间 vs. 模块

// 再次重申，不应该对模块使用命名空间，使用命名空间是为了提供逻辑分组和避免命名冲突。
// 模块文件本身已经是一个逻辑分组，并且它的名字是由导入这个模块的代码指定，所以没有必要为导出的对象增加额外的模块层。


// 接口 vs. 类型别名 interface 和 type
// 像我们提到的，类型别名可以像接口一样；然而，仍有一些细微差别。

// 其一，接口创建了一个新的名字，可以在其它任何地方使用。 类型别名并不创建新名字—比如，错误信息就不会使用别名。 
// 在下面的示例代码里，在编译器中将鼠标悬停在interfaced上，显示它返回的是Interface，但悬停在aliased上时，显示的却是对象字面量类型。

type Alias = { num: number }
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;
// 另一个重要区别是类型别名不能被extends和implements（自己也不能extends和implements其它类型）。 
// 因为软件中的对象应该对于扩展是开放的，但是对于修改是封闭的，你应该尽量去使用接口代替类型别名。

// 另一方面，如果你无法通过接口来描述一个类型并且需要使用联合类型或元组类型，这时通常会使用类型别名。





// npm 包§
// 一般我们通过 import foo from 'foo' 导入一个 npm 包，这是符合 ES6 模块规范的。

// 在我们尝试给一个 npm 包创建声明文件之前，需要先看看它的声明文件是否已经存在。一般来说，npm 包的声明文件可能存在于两个地方：

// 与该 npm 包绑定在一起。判断依据是 package.json 中有 types 字段，或者有一个 index.d.ts 声明文件。这种模式不需要额外安装其他包，是最为推荐的，
// 所以以后我们自己创建 npm 包的时候，最好也将声明文件与 npm 包绑定在一起。
// 发布到 @types 里。我们只需要尝试安装一下对应的 @types 包就知道是否存在该声明文件，
// 安装命令是 npm install @types/foo --save-dev。这种模式一般是由于 npm 包的维护者没有提供声明文件，所以只能由其他人将声明文件发布到 @types 里了。
// 假如以上两种方式都没有找到对应的声明文件，那么我们就需要自己为它写声明文件了。由于是通过 import 语句导入的模块，
// 所以声明文件存放的位置也有所约束，一般有两种方案：

// 创建一个 node_modules/@types/foo/index.d.ts 文件，存放 foo 模块的声明文件。这种方式不需要额外的配置，但是 node_modules 目录不稳定，代码也没有被保存到仓库中，无法回溯版本，有不小心被删除的风险，故不太建议用这种方案，一般只用作临时测试。
// 创建一个 types 目录，专门用来管理自己写的声明文件，将 foo 的声明文件放到 types/foo/index.d.ts 中。这种方式需要配置下 tsconfig.json 中的 paths 和 baseUrl 字段。
// 目录结构：

// /path/to/project
// ├── src
// |  └── index.ts
// ├── types
// |  └── foo
// |     └── index.d.ts
// └── tsconfig.json

// tsconfig.json 内容：

// {
//     "compilerOptions": {
//         "module": "commonjs",
//         "baseUrl": "./",
//         "paths": {
//             "*": ["types/*"]
//         }
//     }
// }
// 如此配置之后，通过 import 导入 foo 的时候，也会去 types 目录下寻找对应的模块的声明文件了。





// export =§
// 在 commonjs 规范中，我们用以下方式来导出一个模块：

// // 整体导出
// module.exports = foo;
// // 单个导出
// exports.bar = bar;
// // 在 ts 中，针对这种模块导出，有多种方式可以导入，第一种方式是 const ... = require：

// // 整体导入
// const foo = require('foo');
// // 单个导入
// const bar = require('foo').bar;




// 如之前所说，对于一个 npm 包或者 UMD 库的声明文件，只有 export 导出的类型声明才能被导入。所以对于 npm 包或 UMD 库，
// 如果导入此库之后会扩展全局变量，则需要使用另一种语法在声明文件中扩展全局变量的类型，那就是 declare global。

// declare global§
// 使用 declare global 可以在 npm 包或者 UMD 库的声明文件中扩展全局变量的类型25：

// types/foo/index.d.ts

declare global {
    interface String {
        prependHello(): string;
    }
}

export {};



// declare module§
// 如果是需要扩展原有模块的话，需要在类型声明文件中先引用原有模块，再使用 declare module 扩展原有模块26：

// types/moment-plugin/index.d.ts

// import * as moment from 'moment';

// declare module 'moment' {
//     export function foo(): moment.CalendarKey;
// }
  
  
