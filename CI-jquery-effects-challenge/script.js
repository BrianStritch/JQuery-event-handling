/**
 * Steps
Inside index.js do the following

Create a click event handler that triggers when the element with an id of card-panel-1 is clicked
Within the click handler target the element with the id of card-panel-1 and use the JQuery hide effect using the preset time set to slow
Create a click event handler that triggers when the element with an id of card-panel-2 is clicked
Within the click handler target the element with the id of card-panel-2 and use the JQuery hide effect using the preset time set to medium
Create a click event handler that triggers when the element with an id of card-panel-3 is clicked
Within the click handler target the element with the id of card-panel-3 and use the JQuery hide effect using the preset time set to fast
Create a click event handler that triggers when the element with an id of card-panel-4 is clicked
Within the click handler target the element with the id of card-panel-4 and use the JQuery hide effect but this time use milliseconds for the timing and set it for 3000 milliseconds  
Enjoy! 
 */

$('#card-panel-1').click(function (){
    $('#card-panel-1').hide('slow');
});
$('#card-panel-2').click(function (){
    $('#card-panel-2').hide('medium');
});
$('#card-panel-3').click(function (){
    $('#card-panel-3').hide('fast');
});
$('#card-panel-4').click(function (){
    $('#card-panel-4').hide(3000);
});

//additional effects
$("   can be any of the html elements but best on buttonss etc").on(function() {
    $(".stream1").show();
    $(".stream1").hide();  // the speeds below can be used for hide and show
    $(".stream1").toggle();  // toggles between show and hide
    $(".stream1").slideDown(1000);  // slides down a hidden html element, you can add speed as a parameter to the function
    $(".stream1").slideUp();  // similar to above but slides a html element up to hide it
    $(".stream1").slideToggle();  //shows an element if it is hidden or hides it if it is visible
    $(".stream1").fadeIn(); // fades in an element, speed can be used as a parameter
    $(".stream1").fadeToggle();  //fades in an element if it is hidden or fades it out if it is visible, speed can be added
    $(".stream1").fadeTo();  // fades an element partially making it transparent, speed needs be added along with opacity 0.5 etc.
    $(".stream2").show('slow');
    $(".stream3").show('medium');
      $(".stream3").show('fast');
    $(".stream1").show(1000);  // this 1000 is milliseconds
});