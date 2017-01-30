$(document).ready(function(){
	$("#testAPI").on("click", function(){
		console.log("Relax, it's working!");
	});
	var test = $.ajax({
		type: "Get",
		url: "http://localhost:3000/api/test"
	});
	test.done(function(data){
		console.log(data);
	});
	test.fail(function(){
		console.log("Oh no!");
	});
});