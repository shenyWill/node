var express = require('express');

var app = express();

app.use('/jintai',express.static('./static'));

app.use('/hello',function(req,res){
    console.log(req.originalUrl + '\n');
    console.log(req.baseUrl + '\n');
    console.log(req.path + '\n');
    res.send('hello')
})

app.listen(8888,'172.16.33.116')

