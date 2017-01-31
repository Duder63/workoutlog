require('dotenv').config();

var express = require('express');
var app = express();

//help the server parse out incoming requests
var bodyParser = require('body-parser');

var sequelize = require('./db.js');
var User = sequelize.import('./models/user');


//creates the table in postgres
//matches the model we defined
//Doesn't drop the db
User.sync(); // sync({ force: true }); WARNING: THIS WILL DROP THE TABLE!

app.use(bodyParser.json());

// to allow client and our local server to communicate (gets around browser safeguard)
app.use(require('./middleware/headers'));
app.use(require('./middleware/validate-session'));

app.use('/api/user', require('./routes/user.js'));

//login route
app.use('/api/login', require('./routes/session.js'));

// send a response when client sends a test with a GET request
app.use('/api/test', function(req, res){
	res.send("Hello World");
});

app.listen(3000, function(){
	console.log("app is listening on port 3000");
});



