var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res) {
    if(req.url == '/test') {
        fs.readFile('test.txt',function(error,data){
            console.log(data)
            res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
            res.end(data);
        })
    }
});

server.listen(3000,'127.0.0.1')