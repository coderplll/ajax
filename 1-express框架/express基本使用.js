const { request, response } = require('express');
//1引入express
const express = require('express');

//2创建应用对象
const app = express();

//3创建路由规则
//request 是对请求报文的封装
//response 是对响应报文的封装
app.get('/', (request, response) => {
    //设置响应
    response.send('hello express');
});

//4监听端口启动服务
app.listen(8000, () => {
    console.log("服务已启动,8000 端口监听中....");
})