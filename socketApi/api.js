var app = require('express')();
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.get('/',function(req,res){
    res.sendfile('index.html');
})

// For Hello world display and even handling!
io.on('connection',function(socket){
    console.log('user connected');

    //sending massage after timeout of 4secs
    setTimeout (function(){
        socket.send('Sends a massage 4seconds after connection')
    },4000)

    //Sending a message using custom event
    setTimeout(function(){
        socket.emit('testerEvent',{description:'A custom event named testerEvent'});
    },4000)

    // Handling client event using the 'on function'
    socket.on('clientEvent',function(data){
      console.log(data);
    });

    //disconnect user
    socket.on('disconnect',function(){
        console.log('hey,You are disconnected');
    })
})

//a diffenrent connection for broadcast
var client= 0;
io.on('connection',function(socket){
     client ++;
    io.sockets.emit('broadcast',{description:client +' Client Connected'});
    socket.on('disconnet',function(){
      client --;
      io.sockets.emit('broadcast',{description: client + 'Client connected'})   
    })

})

//Sending Broadcast and welcome message to new client
  var clients =0;
  io.on('connection',function(socket){
      clients++;
      socket.emit('newclientconnect',{description:'Hey, Welcome Home'});
      //after welcoming our new clients lets broadcast to others
      socket.broadcast.emit('newclientconnect',{description: clients +'clients connected'})
      // when user disconnets
      socket.on('disconnect',function(){
          clients--;
          socket.broadcast.emit('newclientconnect',{description: clients+'clients connected'})
      })
  })

// Having your own name Space
var nsp = io.of('myNameSpace')
 nsp.on('connection',function(socket){
  console.log('hey you are connected to your namespace');
 nsp.emit('hi', 'Hello Everyone');
})

http.listen(3500,function(){
    console.log('hey am listening!')
})