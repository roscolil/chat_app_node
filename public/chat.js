//Create  connection
var socket = io.connect("http://localhost:9090");

var message = document.querySelector("#message");
var handle = document.querySelector("#handle");
var btn = document.querySelector("#send");
var output  = document.querySelector("#output");

btn.addEventListener('click', function() {
  socket.emit('chat', {
    message: message.value;
    handle: handle.value;
  });
});

