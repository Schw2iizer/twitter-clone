$(document).ready(function() {

$("#tweet-controls, #char-count").hide();
	
$(".tweet-compose").on("click", function() {
		$(this).css("height", "5em");
		$("#tweet-controls, #char-count").show();
	});

$(".tweet-compose").on("keydown", function(){
	var total = 140;
	var text = $(".tweet-compose").val();
	$("#char-count").text(140 - text.length);

	if(140 - text.length <= 10){
		$("#char-count").css("color", "red");
	} else {
		$("#char-count").css("color", "black");
	}

	if($(".tweet-compose").val().length >= 141){
		$("#tweet-submit").prop("disabled", true);
	} else {
		$("#tweet-submit").prop("disabled", false);
	};

})

$("#tweet-submit").on("click", function(){
	 var newTweet = $(".tweet").first().clone(true);
	 $("#stream").prepend(newTweet);
	 $("#tweet-content > .tweet-compose").val("");
	 $("tweet=-content > .tweet-compose").trigger("blur");

})







});