$(function(){
	$.extend(WorkoutLog, {
		wrkoutLog: {
			userLogs: [],

			create: function(){
				var logit = {
					result: $("#log-result").val(),
					workouts: $("#log-workoutselect").val(),
					notes: $("#log-notes").val()
				};
				var postData = { wrkoutLog: logit };
				var define = $.ajax({
					type: "POST",
					url: WorkoutLog.API_BASE + "wrkoutLog",
					data: JSON.stringify(postData),
					contentType: "application/json"
				});

				define.done(function(data){
					WorkoutLog.wrkoutLog.userLogs.push(data.wrkoutLog);
				});
			},

			fetchAll: function(){
				var fetchLogits = $.ajax({
					type: "GET",
					url: WorkoutLog.API_BASE + "wrkoutLog",
					headers: {
						"authorization": window.localStorage.getItem("sessionToken")
					}
				})
				.done(function(data){
					WorkoutLog.wrkoutLog.userLogs = data;
				})
				.fail(function(err){
					console.log(err);
				});
			}
		}
	});

	//bindings
	$("#log-save").on("click", WorkoutLog.wrkoutLog.create);

	//fetch definitions if we already are authenticated and refreshed
	if(window.localStorage.getItem("sessionToken")){
		WorkoutLog.wrkoutLog.fetchAll();
	}

});



