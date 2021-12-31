$(document).ready(function() {
 
    // $("#stream1_btn").on(function() {
	// 	$(".stream1").show();
	// 	$(".stream1").hide();  // the speeds below can be used for hide and show
	// 	$(".stream1").toggle();  // toggles between show and hide
	// 	$(".stream1").slideDown(1000);  // slides down a hidden html element, you can add speed as a parameter to the function
	// 	$(".stream1").slideUp();  // similar to above but slides a html element up to hide it
	// 	$(".stream1").slideToggle();  //shows an element if it is hidden or hides it if it is visible
	// 	$(".stream1").fadeIn(); // fades in an element, speed can be used as a parameter
	// 	$(".stream1").fadeToggle();  //fades in an element if it is hidden or fades it out if it is visible, speed can be added
	// 	$(".stream1").fadeTo();  // fades an element partially making it transparent, speed needs be added along with opacity 0.5 etc.
	// 	$(".stream2").show('slow');
	// 	$(".stream3").show('medium');
	//   	$(".stream3").show('fast');
	// 	$(".stream1").show(1000);  // this 1000 is milliseconds
	// });

 	$("#stream1_btn").on("click", function() {   // you can also use .click(function.....) instead of on.('click',function .....)
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() { // you can also add mouse interactions as in .mouseover or .mouseleave
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
	



}); 
