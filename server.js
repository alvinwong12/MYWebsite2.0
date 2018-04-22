var express = require('express')
var app = express()
var port = process.env.PORT || 8000;
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/build'))

app.get('/', function (req, res){
	res.sendFile('index.html');
})

app.post('/message', function(req,res){

	var formData = {
		"name": req.body.name,
		"email": req.body.email,
		"message": req.body.message
	}
	getOAuth2Client(function(err, oauth2Client) {
		if (err) {
			console.log('err:', err);
			res.sendStatus(500);
		} else {
			sendMail(oauth2Client, formData, function(err, results) {
				if (err) {
					console.log('err:', err);
					res.sendStatus(500);
				} else {
					console.log(results);
					res.sendStatus(200);
				}
			});
		}
	});
	
	//res.send(formData);
})

var server = app.listen(port, function(){
	console.log("listening at %s", port);
})