var http = require('http');
var {URL} = require('url');
var server = http.createServer(function(req,res) {
    // var myUrl = new URL('https://example.org/abc?123');
    // console.log(myUrl.search)

    // var pathname = url.parse(req.url).pathname;
	//url.parse()如果第二个参数是true，那么就可以将所有的查询变为对象
	//就可以直接打点得到这个参数
	// var query = url.parse(req.url,true).query;ss
	//直接打点得到这个参数
	// var urlParse = URL.parse(req.url);
	// res.write('s:' + req)
	// var age = query.age;
	// console.log(req.url)
	// console.log("pathname:" + pathname);
	// console.log("query:" + query);
	// console.log("age:" + age);
    res.end();
});

server.listen(3000,'127.0.0.1')