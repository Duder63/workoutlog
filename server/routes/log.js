var router = require('express').Router();
var sequelize = require('../db.js');
var User = sequelize.import('../models/user');
var Definition = sequelize.import('../models/log');

router.post('/', function(req, res){
	//variables
	var logresult = req.body.wrkoutLog.result;
	var workoutSelect = req.body.wrkoutLog.workouts;
	var lognotes = req.body.wrkoutLog.notes;
	var owner = req.user.id;

	//methods
	Log
		.create({
			logresult: logresult,
			workoutSelect: workoutSelect,
			lognotes: lognotes,
			owner: owner
		})
		.then(
			//success
			function createSuccess(wrkoutLog){
				res.json({
					wrkoutLog: wrkoutLog
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


