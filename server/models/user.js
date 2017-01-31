var Sequelize = require('sequelize');

//build a user model in sequelize
module.exports = function(sequelize, DataTypes){
	return sequelize.define('user', {
		username: DataTypes.STRING,
		passwordhash: DataTypes.STRING
	});		
};

