$(document).ready(function(){
	$("#testAPI").on("click", function(){
		console.log("Relax, it's working!");
	});

	//request to server to test/confirm connection
	var test = $.ajax({
		type: "Get",
		url: "http://localhost:3000/api/test"
	});

	//successful reponse from server to our GET request
	test.done(function(data){
		console.log(data); //response would be "Hello World"
	});

	//no reponse from server to our GET request
	test.fail(function(){
		console.log("Oh no!");
	});
});