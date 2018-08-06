var express = require('express');

var app = express();

app.use(express.static('./static'));


app.listen(3555,'172.16.33.116')