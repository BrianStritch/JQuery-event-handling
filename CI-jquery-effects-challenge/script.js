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