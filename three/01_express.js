let express = require('express');

let app = express();

app.get('/',function(req,res){
    res.send('express index')
})

app.get('/student',function(req,res){
    res.send('student')
})

app.get(/^\/student\/([\d]{10})$/,function(req,res){
    res.send(req.params[0]);
})

app.get('/teacher/:id',function(req,res) {
    res.send(req.params['id'])
})

app.listen(3000)