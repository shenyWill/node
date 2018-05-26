var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');

var server = http.createServer(function(req,res) {
    var pathname = url.parse(req.url).pathname;
    if(pathname.indexOf('.') == -1) {
        pathname += '/index.html';
    }
    var pathUrl = './' + path.normalize('static/' + pathname);
    var mimeName = path.extname(pathname);
    fs.readFile(pathUrl,function(error,data) {
        if(error) {
            res.writeHead(404,{"Content-type":"text/html;charset=UTF8"});
            fs.readFile('./static/404.html',function(error,data) {
                res.end(data)
            })
            return;
        }
        getMimeName(mimeName,function(name) {
            var cTyname = name + ';charset=UTF8';
            res.writeHead(200,{'Content-type':cTyname});
            res.end(data)
        })
        
    })
    

})

server.listen(3000,'127.0.0.1');

function getMimeName(mimeName,callback) {
    fs.readFile('./mime.json',function(error,data) {
        var dataObj = JSON.parse(data);
        callback(dataObj[mimeName]);
    })
}