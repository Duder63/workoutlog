module.exports = function(sequelize, DataTypes){
	//With define, the first argument is going to 
	// represent a column in the db table

	return sequelize.define('log', {
		description: DataTypes.STRING,
		result: DataTypes.STRING, 
		owner: DataTypes.INTEGER,
		def: DataTypes.INTEGER
	},{
	});
};