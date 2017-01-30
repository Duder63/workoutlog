var express = require('express');
var app = express();

// to allow client and our local server to communicate (gets around browser safeguard)
app.use(require('./middleware/headers'));

// send a response when client sends a test with a GET request
app.use('/api/test', function(req, res){
	res.send("Hello World");
});

app.listen(3000, function(){
	console.log("Listening on Port 3000")
});
