var net = require('net');
// creates a new TCP server
// The handler argument is automatically set as a listener for the connection event
var server = net.createServer(function (socket) {
  // every time someone connects, tell them hello and then close the connection
  console.log('Connection from' + socket.remoteAddress);
  socket.end('Hello World\n');
});
var port = 7000;
// fire up the server bound to port 7000 on localhost
server.listen(port, 'localhost');
// put a friendly message on the terminal
console.log(`TCP server listening on port ${port} at localhost.`);
// node hello_Tcp.js
