// first 
$('.contentDiv').first().css('background-color', '#ffaaaa');

// last
$('.contentDiv').last().css('background-color', '#ffaaaa');

// siblings

$('div').click(function (){
    $(this).siblings().fadeTo('slow', .2);
});

// filter   this method allows you specify some additional criteria and filter them out
$('p').filter('.intro').addClass('highlight');

// variables to store some data for adding to other elements or classes etc.
// example of a reset button that changes to the color of whichever element is clicked (rows of colored boxes below button)
var panelColor = $(this).css('background-color');

$('.resetButton').css('background-color', panelColor);


/**
 * CI CHALLENGE CODE AND TASKS
 */

 $('#reset').click(function(){
	$(this).siblings().children().removeClass('red').removeClass('yellow').removeClass('green').removeClass('large-font');
});

$('#card-btn-1').click(function(){
	$(this).siblings('span').addClass('yellow');
});

$('#card-btn-2').click(function(){
	$(this).siblings('#card-par-1').addClass('red');
});

$('#card-btn-3').click(function(){
	$(this).siblings().addClass('large-font');
});


/**
 * Steps
Inside index.js do the following

Within the #card-btn-1 event handler, and using the keyword this, use the siblings method to target all span elements, and use the addClass method to add the class name "yellow"
Within the #card-btn-2 event handler, and using the keyword this, use the siblings method to target the element with the id of  "card-par-1", and use the addClass method to add the class name "red"
Within the #card-btn-3 event handler, and using the keyword this, use the siblings method to target all siblings, and use the addClass method to add the class name "large-font"
Enjoy!     

 */