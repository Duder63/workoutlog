$(function() {
	$.extend(WorkoutLog, {
		goal: {
			//mygoals: [],


			create: function() {
				var myGoal = {
		        	desc: $("#goal-description").val(),
		         	result: $("#goal-result").val(),
		      	};
		      	var postData = { goal: myGoal };
		      	var newGoal = $.ajax({
		         	type: "POST",
		         	url: WorkoutLog.API_BASE + "goal",
		         	data: JSON.stringify(postData),
		         	contentType: "application/json"
		      	});

		      	newGoal.done(function(data) {
	      			WorkoutLog.goal.mygoals.push(data);
	      			$("#goal-description").val("");
					$("#goal-result").val("");
		      	});
			}

		}
	});

	$("#goal-save").on("click", WorkoutLog.goal.create);

});