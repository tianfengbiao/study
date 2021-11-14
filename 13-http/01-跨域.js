// https://segmentfault.com/a/1190000011145364

// 首先了解下浏览器的同源策略
// 同源策略/SOP（Same origin policy）是一种约定，由Netscape公司1995年引入浏览器，它是浏览器最核心也最基本的安全功能，
// 如果缺少了同源策略，浏览器很容易受到XSS、CSRF等攻击。
// 所谓同源是指"协议+域名+端口"三者相同，即便两个不同的域名指向同一个ip地址，也非同源。


// https://segmentfault.com/a/1190000013331105
// 一、 通过jsonp跨域
function jsonp() {
    var script = document.createElement('script');
    script.type = 'text/javascript';

    // 传参并指定回调执行函数为onBack
    script.src = 'http://www.....:8080/login?user=admin&callback=onBack';
    document.head.appendChild(script);

    // 回调执行函数
    function onBack(res) {
        alert(JSON.stringify(res));
    }
}

// 二、 document.domain + iframe跨域
// 此方案仅限主域相同，子域不同的跨域应用场景。

// 1.）父窗口：(http://www.domain.com/a.html)

// <iframe id="iframe" src="http://child.domain.com/b.html"></iframe>
// <script>
//     document.domain = 'domain.com';
//     var user = 'admin';
// </script>
// 2.）子窗口：(http://child.domain.com/b.html)

// <script>
//     document.domain = 'domain.com';
//     // 获取父窗口中变量
//     alert('get js data from parent ---> ' + window.parent.user);
// </script>

// 五、 postMessage跨域

// 1.）a.html：(http://www.domain1.com/a.html)

// <iframe id="iframe" src="http://www.domain2.com/b.html" style="display:none;"></iframe>
// <script>       
//     var iframe = document.getElementById('iframe');
//     iframe.onload = function() {
//         var data = {
//             name: 'aym'
//         };
//         // 向domain2传送跨域数据
//         iframe.contentWindow.postMessage(JSON.stringify(data), 'http://www.domain2.com');
//     };

//     // 接受domain2返回数据
//     window.addEventListener('message', function(e) {
//         alert('data from domain2 ---> ' + e.data);
//     }, false);
// </script>
// 2.）b.html：(http://www.domain2.com/b.html)

// <script>
//     // 接收domain1的数据
//     window.addEventListener('message', function(e) {
//         alert('data from domain1 ---> ' + e.data);

//         var data = JSON.parse(e.data);
//         if (data) {
//             data.number = 16;

//             // 处理后再发回domain1
//             window.parent.postMessage(JSON.stringify(data), 'http://www.domain1.com');
//         }
//     }, false);
// </script>


// 六、 跨域资源共享（CORS）
// 普通跨域请求：只服务端设置Access-Control-Allow-Origin即可，前端无须设置，若要带cookie请求：前后端都需要设置。

// 需注意的是：由于同源策略的限制，所读取的cookie为跨域请求接口所在域的cookie，而非当前页。
// 如果想实现当前页cookie的写入，
// 可参考下文：七、nginx反向代理中设置proxy_cookie_domain 和 
// 八、NodeJs中间件代理中cookieDomainRewrite参数的设置。

// 目前，所有浏览器都支持该功能(IE8+：IE8/9需要使用XDomainRequest对象来支持CORS）)，CORS也已经成为主流的跨域解决方案。

var xhr = new XMLHttpRequest(); // IE8/9需用window.XDomainRequest兼容

// 前端设置是否带cookie
xhr.withCredentials = true;

xhr.open('post', 'http://www.domain2.com:8080/login', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.send('user=admin');

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        alert(xhr.responseText);
    }
};

// Java后台：

/*
 * 导入包：import javax.servlet.http.HttpServletResponse;
 * 接口参数中定义：HttpServletResponse response
 */

// 允许跨域访问的域名：若有端口需写全（协议+域名+端口），若没有端口末尾不用加'/'
response.setHeader("Access-Control-Allow-Origin", "http://www.domain1.com"); 

// 允许前端带认证cookie：启用此项后，上面的域名不能为'*'，必须指定具体的域名，否则浏览器会提示
response.setHeader("Access-Control-Allow-Credentials", "true"); 

// 提示OPTIONS预检时，后端需要设置的两个常用自定义头
response.setHeader("Access-Control-Allow-Headers", "Content-Type,X-Requested-With");


// 2、 nginx反向代理接口跨域
// 跨域原理： 同源策略是浏览器的安全策略，不是HTTP协议的一部分。服务器端调用HTTP接口只是使用HTTP协议，不会执行JS脚本，不需要同源策略，也就不存在跨越问题。

// 实现思路：通过nginx配置一个代理服务器（域名与domain1相同，端口不同）做跳板机，反向代理访问domain2接口，
// 并且可以顺便修改cookie中domain信息，方便当前域cookie写入，实现跨域登录。