var http = require('http');
var querystring = require('querystring');

var server = http.createServer(function(req,res) {
    if(req.url == '/posturl' && req.method.toLowerCase() == 'post') {
        var alldate = '';
        req.addListener('data',function(chunk) {
            alldate += chunk;
        })
        req.addListener('end',function(){
            var datastring = alldate.toString();
            var dataObj = querystring.parse(datastring);
            console.log(dataObj);
            res.end('success');
        })
    }
});

server.listen(3000,'127.0.0.1')