'use strict';

var http = require('http');

var server = http.createServer(function(request, response) {
  if(request.url === '/time') {
    //do something with /time request here
  } else if(request.url === '/greet') {
    //do something with /greet request here
  } else {
    response.writeHead(404, {
      "Content-Type": "text/plain"
    });//end 404 write header
    response.write('404 Page Not Found');
    response.end();
  }
});//end server create