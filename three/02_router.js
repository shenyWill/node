let express = require('express');

let app = express();

app.set('view engine','ejs');

app.get('/',function(req,res) {
    res.render('index')
});
app.post('/',function(req,res){
    res.send('成功')
})
app.listen(3000)