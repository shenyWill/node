var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res) {
    if(req.url == '/fang') {
        fs.readFile('./testOne.html',function(error,data){
            res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
            res.end(data);
        })
    }else if(req.url == '/yuan') {
        fs.readFile('./testTwo.html',function(error,data){
            res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
            res.end(data);
        })
    }else if(req.url == '/0.jpg') {
        fs.readFile('./0.jpg',function(error,data){
            res.writeHead(200,{"Content-type":"image/jpg;charset=UTF-8"});
            res.end(data);
        })
    }else if(req.url == '/b.css') {
        fs.readFile('./a.css',function(error,data){
            res.writeHead(200,{"Content-type":"text/css;charset=UTF-8"});
            res.end(data);
        })
    }else{
		res.writeHead(404,{"Content-type":"text/html;charset=UTF-8"});
		res.end("嘻嘻，没有这个页面呦");
	}
});

server.listen(3000,'127.0.0.1')