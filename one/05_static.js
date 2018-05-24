var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

var server = http.createServer(function(req,res) {
    var pathname = url.parse(req.url).pathname;
    if(pathname == '/') {
        pathname = 'index.html';
    }
    var mimename = path.extname(pathname);
    mimename = getMime(mimename)

    fs.readFile('./static/'+pathname,function(error,data) {
        if(error) {
            res.writeHead(404,{"Content-type":"text/html;charset=UTF8"});
            fs.readFile('./static/404.html',function(error,data) {
                res.end(data)
            })
            return;
        }
        res.writeHead(200,{"Content-type":mimename})
        res.end(data);
    })

    
});
function getMime(extname) {
    switch (extname) {
        case '.html':
            return 'text/html'
            break;
        case '.jpg':
            return 'image/jpg'
            break;
        case '.css':
            return 'text/css'
            break;
    }
}

server.listen(3000,'127.0.0.1');
