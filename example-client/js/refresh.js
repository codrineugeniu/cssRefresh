
var socket = io.connect('http://127.0.0.1:8080');  

  socket.on('vasile', function (data) {
  window.location.reload()
  });

  