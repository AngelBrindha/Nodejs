var http = require('http');

// configure our HTTP server to respond with hello world to all request
var server = http.createServer(function (request, response) {
  console.log(request.url);
  response.writeHead(200, { 'content-Type': 'text/plain' });
  response.end('Hello World\n');
});
var port = 8000;
// listen on port 8000, Ip default to 127.0.0.1
server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
});
// put a friendly message n the terminal
console.log('Server running at http://127.0.0.1:8000/');
// node hello_http.js
