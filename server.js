'use strict';

var http = require('http');
var url = require('url');

var server = http.createServer(function(request, response) {
  var userInput = url.parse(request.url).pathname.split('/');
  var getSingleWord = userInput[2];
  var getPath = userInput[1];

  if(('/' + getPath) === '/time') {
    //do something with /time request here
    var date = new Date().toString();
    response.writeHead(200, {
      "Content-Type": "text/plain"
    });//end /time 200 write header
    response.write('Server Date: ' + date);
    return response.end();
  } else if(('/' + getPath) === '/greet') {
    console.log('hit greet path');
    //do something with /greet request here
    response.writeHead(200, {
      "Content-Type": "application/json, text/plain"
    });//end /greet write head

    if(request.method === 'POST') {
      request.on('data', function(data) {
        //var pathname = url.parse(request.url).data;
        response.write(JSON.stringify({msg: 'hello world'}));
        return response.end();
      });//end on POST request
    } else {
      console.log(typeof response);
      response.write(JSON.stringify({msg: 'hello ' + getSingleWord}));
      return response.end();
    }
  } else {
    response.writeHead(404, {
      "Content-Type": "application/json"
    });//end 404 write header
    response.write(JSON.stringify({msg: '404 Page Not Found'}));
    return response.end();
  }
});//end server create

server.listen(3000, function() {
  console.log('Server has started');
});