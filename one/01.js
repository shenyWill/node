var http = require('http');

var server = http.createServer(function(req,res) {
    res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"});
    res.end("你好：" + (1+2+2) + "数字")
})

server.listen(3000,'127.0.0.1')