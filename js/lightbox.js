$(document).ready(function(){
	console.log("lightbox initialized");

	$("#lightBoxTrigger").click(function(){
		//$("#lightbox").css("display", "block");
		//$("#lightbox").show();
		$("#lightbox").fadeIn(500);
	
	})

	$("#closeBtn").click(function(){
		$("#lightbox").fadeOut(500);
	})

});

