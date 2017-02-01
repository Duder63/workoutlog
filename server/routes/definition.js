var router = require('express').Router();
var sequelize = require('../db.js');
var User = sequelize.import('../models/user');
var Definition = sequelize.import('../models/definition');

router.post('/', function(req, res){
	//variables
	var description = req.body.definition.desc;
	var logType = req.body.definition.type;
	var owner = req.user.id;

	//methods
	Definition
		.create({
			description: description,
			logType: logType,
			owner: owner
		})
		.then(
			//success
			function createSuccess(definition){
				res.json({
					definition: definition
				});
			},
			//error
			function createError(err){
				res.send(500, err.message);
			}
		);
});

router.get('/', function(req, res){
	var userid = req.user.id;

	Definition
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


