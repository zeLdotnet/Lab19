var phrases = require('./phrases');

var http = require('http');

http.createServer (function(request, response){
	response.writeHead(200, {"Content-type" : "text/html"});
	response.write("<h1 style='color:blue; background-color: lavender;'>" + phrases.random() + "</h1>");
	response.end();
}).listen(8888);