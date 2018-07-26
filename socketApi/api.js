var app = require('express')();
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.get('/',function(req,res){
    res.sendfile('index.html');
})

io.on('connection',function(socket){
    console.log('user connected');

    //sending massage after timeout of 4secs
    setTimeout (function(){
        socket.send('Sends a massage 4seconds after connection')
    },4000)

    //disconnect user
    socket.on('disconnect',function(){
        console.log('hey,You are disconnected');
    })
})

http.listen(3500,function(){
    console.log('hey am listening!')
})