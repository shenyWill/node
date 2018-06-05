const router = require('./controller');

const express = require('express');

const app = express();

app.set('view engine','ejs');

app.use('/static',express.static('./public'));
app.use(express.static('./uploads'));

// 首页
app.get('/',router.showIndex);

// album相册
app.get('/:albumName',router.showAlbum);

// 上传
app.get('/up',router.showUp)

// 404页面
app.use(function(req,res) {
    res.render('error.ejs',{
        'baseUrl':req.pathname
    })
})

app.listen(3000)