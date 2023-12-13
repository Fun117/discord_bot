var http = require('http');

http.createServer(function (req, res) {
  res.write("active now");
  res.end();
}).listen(8080);
