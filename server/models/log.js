module.exports = function(sequelize, DataTypes){
	//With define, the first argument is going to 
	// represent a column in the db table

	return sequelize.define('wrkoutLog', {
		result: DataTypes.STRING,
		workouts: DataTypes.STRING, //by time, reps, weight, ...
		notes: DataTypes.STRING,
		owner: DataTypes.INTEGER
	},{
	});
};