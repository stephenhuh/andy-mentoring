

//unix pipes, middleware, require

var express = require('express')
var app = express()
var fs= require('fs');
var path = require('path');

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static(__dirname))

app.get('/foods', function (req, res) {
	//res.send('Hello WORLDOELRODL')
	fs.readFile('foods.json', function(err, data){
				res.send(data.toString());
		});
})

app.listen(3000, function() {
	console.log('example app listening on port 3000')
})
