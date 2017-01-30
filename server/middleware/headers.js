//This code will load into the HTML header, 
//allowing for Cross Origin Resource Sharing (CORS).

module.exports = function(req,res,next){
	res.header('access-control-allow-origin','*');
	next();
};