//This code will load into the HTML header, 
//allowing for Cross Origin Resource Sharing (CORS).

// access-control-allow-origin’ allows Cross Origin Requests (locked down in browsers by default - we “override it” by this line).
// the second line allows headers to have GET / POST / PUT / DELETE request on it.
// res.header sets what will be happening within the header to handle authorization in our application.
// next(); tells our server to either go to the next middleware or keep the request going till it becomes handled.

module.exports = function(req,res,next){
	res.header('access-control-allow-origin','*');
	res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE');
	res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	next();
};