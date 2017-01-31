var Sequelize = require('sequelize');

var sequelize = new Sequelize('workoutlog', 'postgres', 'db^GMS.11', {
	host: 'localhost',
	dialect: 'postgres'
});

sequelize.authenticate().then(
	function() {
		console.log('connected to workoutlog postgres db');
	},
	function(err){
		console.log(err);
	}
);

module.exports = sequelize;

var User = sequelize.import('./models/user');