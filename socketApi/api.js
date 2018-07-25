var app = require('express')();
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.get('/',function(req,res){
    res.sendfile('index.html');
})

io.on('connection',function(socket){
    console.log('user connected');

    //disconnect user
    socket.on('disconnect',function(){
        console.log('hey,You are disconnected');
    })
})

http.listen(3500,function(){
    console.log('hey am listening!')
})