$(document).ready(function() {
	$(".more-block").hide();
	$('#first').click(function(){
		if($(p1).hasClass("more-block")) {
			$("#p1").show();
			document.getElementById("first").innerHTML = "&laquo; Read Less";
			document.getElementById("p1").className = "less-block";
		}
		else {
			$("#p1").hide();
			document.getElementById("first").innerHTML = "Read More &raquo;";
			document.getElementById("p1").className = "more-block";
		}
	});	
	$('#second').click(function(){
		if($(p2).hasClass("more-block")) {
			$("#p2").show();
			document.getElementById("second").innerHTML = "&laquo; Read Less";
			document.getElementById("p2").className = "less-block";
		}
		else {
			$("#p2").hide();
			document.getElementById("second").innerHTML = "Read More &raquo;";
			document.getElementById("p2").className = "more-block";
		}
	});
	$('#third').click(function(){
		if($(p3).hasClass("more-block")) {
			$("#p3").show();
			document.getElementById("third").innerHTML = "&laquo; Read Less";
			document.getElementById("p3").className = "less-block";
		}
		else {
			$("#p3").hide();
			document.getElementById("third").innerHTML = "Read More &raquo;";
			document.getElementById("p3").className = "more-block";
		}
	});
});