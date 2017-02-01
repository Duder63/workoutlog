var router = require('express').Router();
var sequelize = require('../db.js');
var Log = sequelize.import('../models/log');
var User = sequelize.import('../models/user');
var Definition = sequelize.import('../models/definition');


router.post('/', function(req, res){
	//variables
	var description = req.body.log.description;
	var result = req.body.log.result;
	var owner = req.user;
	var definition = req.body.log.def;	

	//methods
	Log
		.create({
			description: description,
			result: result,
			owner: user.id,
			def: definition
		})
		.then(
			//success
			function createSuccess(log){
				res.json(log);
			},
			//error
			function createError(err){
				res.send(500, err.message);
			}
		);
});

router.get('/', function(req, res){
	var userid = req.user.id;

	Log
	//findAll by owner
	.findAll({
		where: { owner: userid }
	})

	.then(
		//success
		function findAllSuccess(data){
			//console.log(data);
			res.json(data);
		},
		//error
		function findAllError(err){
			res.send(500, err.message);
		}
	);
});

module.exports = router;


