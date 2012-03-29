var io = require('socket.io').listen(8080);
var global_socket;  
  
io.sockets.on('connection', function (socket) {  
  global_socket = socket;  
});  

var fs = require('fs');
var path = []; // eg: 'C:\\inetpub\\wwwroot\\test\\css\\main.css';

  fs.watch(path, function (event, filename) {
 
   io.sockets.emit('vasile','refresh');
  if (filename) {
    console.log('filename provided: ' + filename);
  } else {
    console.log('filename not provided');
  }
});