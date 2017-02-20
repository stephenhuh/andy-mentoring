// var express = require('express')
// var app = express()
// var fs= require('fs');
// var path = require('path');
//
// app.get('/', function (req, res) {
// 	//res.send('Hello WORLDOELRODL')
// 	// fs.readFile('index.html', function(err, data){
// 	// 			res.send(data.toString());
// 	// 	});
// 	res.sendFile(path.join(__dirname + '/index.html'));
// });
//
// app.use(express.static(__dirname))
//
// app.get('/foods', function (req, res) {
// 	//res.send('Hello WORLDOELRODL')
// 	fs.readFile('foods.json', function(err, data){
// 				res.send(data.toString());
// 		});
// })
//
//
//
// app.listen(3000, function() {
// 	console.log('example app listening on port 3000')
// })


var dam_he_clicked = function() {
  alert("That was bold. We need bold.");
}

var hit_dat_xhr = function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://ipinfo.io/json", false);
  xhr.send();
  var response = JSON.parse(xhr.responseText);
  alert("ur in " + response.city + " u dummy" );
  console.log(xhr.responseText);
}

var hit_dat_jquery = function() {
  $.get("https://ipinfo.io/json", function(response) {
    alert(response.city);
    console.log(response);
  });
}

var getsumfoods = function() {
  $.get("/foods", function(response) {
    // alert(JSON.parse(response));
		// alert(response);
    // console.log(JSON.parse(response).Snickers.calories);
		// console.log(response);
		// console.log(JSON.parse(response));
		// console.log(JSON.stringify(response, null, 4));
		document.getElementById("demo").innerHTML = response;
  });

}


//Feedback/Questions
//You said it's more standard to have the app.get stuff in the same file as this,
//but "require" isn't defined somehow. It says it's cuz we're running the node application and
//script in the terminal togethe, so it's a different execution environmnet then running the script
//in a browser. How do you usually get around this then?
//What is difference between hosting this webserver and my own html from iteration 2?
