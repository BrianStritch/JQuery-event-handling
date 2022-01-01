// example provided in video walkthrough
//next()  targets the next in line in the dom tree
$('div').next();
var firstDiv = $('containerDiv').first();
firstDiv.next().css('background-color', '#ffaaaa');

//prev()  targets the previous element in line in the dom tree
$('div').prev();
var previousDiv = $('containerDiv').first();
previousDiv.prev().css('background-color', '#ffaaaa');

//toggleClass
$('div').toggleClass('bigBorder');


/**
 * CI-CHALLENGE CODE AND TASK
 */

/**
 * Steps
Inside index.js do the following

Within the click handler, using the this keyword and the relationship between the button and the <p> element, toggle the p element by clicking on the button, and using .slideToggle(‘slow’)
Enjoy!     
 */

$("button").click(function() {
	$(this).next().slideToggle('slow');
});