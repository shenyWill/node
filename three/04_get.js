var express = require('express');

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine','ejs');

app.locals.title = 'post请求';
app.locals.username = 'username名称';

app.get('/index',function(req,res) {
    res.render('form',{
        title:'模拟get到post请求'
    })
});

app.post('/index',(req,res) => {
    console.log(req.body);
    console.log(app.mountpath)
    res.send('post请求')
})

app.get('/get',(req,res) => {
    console.log(req.query);
    res.send('get请求')
} )



app.listen(3000)