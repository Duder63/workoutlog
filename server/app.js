var express = require('express');
var app = express();

//help the server parse out incoming requests
var bodyParser = require('body-parser');

var sequelize = require('./db');
var User = sequelize.import('./models/user');

// to allow client and our local server to communicate (gets around browser safeguard)
app.use(require('./middleware/headers'));

// send a response when client sends a test with a GET request
app.use('/api/test', function(req, res){
	res.send("Hello World");
});

app.listen(3000, function(){
	console.log("app is listening on port 3000");
});

//creates the table in postgres
//matches the model we defined
//Doesn't drop the db
User.sync(); // sync({ force: true }); WARNING: THIS WILL DROP THE TABLE!

app.use(bodyParser.json());

app.post('/api/user', function(req, res){
	//when we post to api user, it will want a user object in the body
	var username = req.body.user.username;
	var pass = req.body.user.password;	//TODO: hash this password - HASH=not human readable

	//Match the model we create above
	//Sequelize - take the user model and go out to the db and create this:
	User.create({
		username: username,
		passwordhash: ''
}).then(
		//Sequelize is going to return the object it created from db.
		function createSuccess(user){
			//successful get thsi:
			res.json({
				user: user,
				message: 'create'
			});
		},
		function createError(err){
			res.send(500, err.message);
		}
	);
});

