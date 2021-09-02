//1引入express
const express = require('express');

//2创建应用对象
const app = express();

//3创建路由规则  request 是对请求报文的封装 response 是对响应报文的封装

app.get('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //设置响应体
    response.send('hello ajax get');
});

//all可以接收任意类型的请求
app.all('/server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //可以自定义请求头信息
    response.setHeader('Access-Control-Allow-Headers', '*');

    //设置响应体
    response.send('hello ajax post');
});

//响应json
app.all('/json-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    response.setHeader('Access-Control-Allow-Headers', '*');

    //响应一个数据
    const data = {
        name: 'atguigu'
    };
    //对对象进行字符串转换
    let str = JSON.stringify(data);
    //设置响应体
    response.send(str);
});

//针对IE缓存
app.get('/ie', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    //设置响应体
    response.send('hello IE122');
});

//延时响应
app.all('/delay', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');

    setTimeout(() => {
        //设置响应体
        response.send('延时响应');
    }, 3000);

});

//JQuery 服务
app.all('/jquery-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //可以自定义请求头信息
    response.setHeader('Access-Control-Allow-Headers', '*');

    setTimeout(() => {
        const data = { name: '尚硅谷' };
        response.send(JSON.stringify(data));
    }, 1000);

});

//axios 服务
app.all('/axios-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //可以自定义请求头信息
    response.setHeader('Access-Control-Allow-Headers', '*');

    // setTimeout(() => {
    const data = { name: '尚硅谷' };
    response.send(JSON.stringify(data));
    // }, 1000);

});

//fetch 服务
app.all('/fetch-server', (request, response) => {
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    //可以自定义请求头信息
    response.setHeader('Access-Control-Allow-Headers', '*');

    const data = { name: '尚硅谷' };
    response.send(JSON.stringify(data));

});

//jsonp服务
app.all('/jsonp-server', (request, response) => {
    // response.send('console.log("hello jsonp")');

    const data = {
        name: '尚硅谷'
    };
    //数据转换为字符串
    let str = JSON.stringify(data)
        //返回结果
    response.end(`handle(${str})`);
});


//用户名检测是否存在
app.all('/check-username', (requesr, response) => {

    const data = {
            exist: 1,
            msg: '用户名已经存在'
        }
        //设置响应
    let str = JSON.stringify(data)
        // response.send('console.log("hello jsonp")')
    response.send(`handle(${str})`)

})

//jquey方法 检测用户名是否存在
app.all('/jquery-jsonp-server', (request, response) => {

    const data = {
        name: 'pll',
        city: ['北京', '上海', '深圳']
    };
    //设置响应
    let str = JSON.stringify(data)
        //接受callback参数
    let cb = request.query.callback
        // response.send('console.log("hello jsonp")')
    response.send(`${cb}(${str})`)

})

//CORS官方跨域响应请求
app.all('/cors-server', (request, response) => {
    //设置响应头 设置允许跨域 *表示所有网页
    response.setHeader('Access-Control-Allow-Origin', '*');
    //可以自定义请求头信息 *表示所有包括未定义的信息
    response.setHeader('Access-Control-Allow-Headers', '*');
    //允许任何请求跨域 *表示所有请求类型
    response.setHeader('Access-Control-Allow-Method', '*');

    response.send('hello cors');
})





//4监听端口启动服务
app.listen(8000, () => {
    console.log("服务已启动,8000 端口监听中....");
})