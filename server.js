var express = require('express')
var app = express()
var port = process.env.PORT || 8000;
var bodyParser = require('body-parser');

app.use(express.static(__dirname))

app.get('/', function (req, res){
	res.sendFile(__dirname + '/build/index.html');
})

var server = app.listen(port, function(){
	console.log("listening at %s", port);
})