let http = require('http');
let fs = require('fs');
let ejs = require('ejs');

let server = http.createServer(function(req,res) {
    fs.readFile('./template/index.ejs',function(error,data) {
        let template = data.toString();
        let json = {
            ejs:'EJS',
            arr:['one','two','three']
        };
        let html = ejs.render(template,json);
        res.end(html)
    })
})

server.listen(3000,'127.0.0.1')