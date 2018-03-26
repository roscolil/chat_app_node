var express = require('express');
var app = express();

var server = app.listen(9090, function () {  
  console.log('Listening on port 9090');
});

var socket = require('socket.io');
var io = socket(server);


app.use(express.static("public"));

io.on("connection", function(socket){
  console.log('Socket connection made ' + socket.id);
  socket.on("chat", function (data) {
    io.sockets.emit("chat", data);
  } );
});



