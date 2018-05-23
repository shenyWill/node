var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res) {
    fs.readdir('./readfile',function(error,file) {
        var wenjianjia = [];

        (function readWen(i) {
            if(i == file.length) {
                console.log(wenjianjia)
                return;
            }
            fs.stat('./readfile/' + file[i],function(error,stats) {
                if(stats.isDirectory()) {
                    wenjianjia.push(file[i])
                }
                i++;
                readWen(i);
            })
        })(0)

    });

    res.end();
})

server.listen(3000,'127.0.0.1')