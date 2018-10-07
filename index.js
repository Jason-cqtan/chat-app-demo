//express
var app = require('express')();

//下面两行代码和下下面两行代码可互换
// var server = require('http').Server(app).listen(3000);
// var io = require('socket.io')(server);


var server = require('http').createServer(app).listen(3000,()=>{
    console.log('server start,listening 3000 port!')
});
var io = require('socket.io').listen(server);


app.use('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});
//链接
io.on('connection',function(sock){
    //监听客户端发送
    sock.on('chat.message',str=>{
        //返回客户端
        io.emit('chat.message',str);
        // console.log('recive message from client：'+str);
    })
});
