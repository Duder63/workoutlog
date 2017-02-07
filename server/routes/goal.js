var router = require('express').Router();
var sequelize = require('../db.js');
var User = sequelize.import('../models/user.js');
var Goal = sequelize.import('../models/goal.js');

router.post('/', function(req, res){
	//variables
    var description = req.body.goal.desc; 
    var result = req.body.goal.result; 
    var user = req.user;

	//methods
	Goal
		.create({
	    	description: description,
	    	result: result,
	    	owner: user.id
		})
		.then(
			//success
			function createSuccess(goal){
				res.json(goal);
			},
			//error
			function createError(err){
				res.send(500, err.message);
			}
		);
});


module.exports = router;


