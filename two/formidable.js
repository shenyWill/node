var http = require('http');
var formidable = require('formidable');
util = require('util');

var server = http.createServer(function(req,res) {
    if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
        var form = new formidable.IncomingForm();
        form.uploadDir = __dirname + "/uploads";
        form.parse(req, function(err, fields, files) {
            res.end(util.inspect({fields: fields, files: files}));
        })
    }
})

server.listen(3000,'127.0.0.1')